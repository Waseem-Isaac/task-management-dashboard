import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Task, TaskFormData } from './models';
import { StatisticsService } from '../statistics/statistics.service';
import { BoardService } from './board.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private http = inject(HttpClient);
  private statisticsService = inject(StatisticsService);
  private boardService = inject(BoardService);

  private _tasks = signal<Task[]>([]);
  readonly tasks = this._tasks.asReadonly();
  readonly isLoading = signal(true);

  // Tracks which board's tasks are currently loaded — null means nothing loaded yet.
  // Any board change automatically invalidates the cache and triggers a fresh fetch.
  private _loadedBoardId: string | null = null;

  private get boardId(): string {
    return this.boardService.activeBoard()?._id ?? '';
  }

  loadTasks(): Observable<Task[]> {
    const currentBoardId = this.boardId;
    if (!currentBoardId) return of([]);  // board not resolved yet — effect will retry once it is
    if (this._loadedBoardId === currentBoardId) return of(this._tasks());
    // Board changed (or first load) — reset and fetch
    this._tasks.set([]);
    this.isLoading.set(true);
    return this.http.get<{ tasks: Task[] }>(`boards/${currentBoardId}/tasks`).pipe(
      tap((data) => {
        this._tasks.set(data.tasks);
        this._loadedBoardId = currentBoardId;
        this.isLoading.set(false);
      }),
      map((data) => data.tasks),
    );
  }

  getTaskById(id: string): Observable<Task | undefined> {
    return this.http
      .get<Task>(`boards/${this.boardId}/tasks/${id}`)
      .pipe(map((task) => task || undefined));
  }

  createTask(taskData: TaskFormData): Observable<Task> {
    return this.http.post<Task>(`boards/${this.boardId}/tasks`, taskData).pipe(
      tap((created) => {
        this._tasks.update((tasks) => [...(tasks ?? []), created]);
        this.statisticsService.reload();
      }),
    );
  }

  updateTask(id: string, taskData: TaskFormData): Observable<Task> {
    return this.http.put<Task>(`boards/${this.boardId}/tasks/${id}`, taskData).pipe(
      tap((updated) => {
        this._tasks.update((tasks) => tasks.map((t) => (t._id === id ? updated : t)));
        this.statisticsService.reload();
      }),
    );
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`boards/${this.boardId}/tasks/${id}`).pipe(
      tap(() => {
        this._tasks.update((tasks) => tasks?.filter((t) => t._id !== id));
        this.statisticsService.reload();
      }),
    );
  }

  /**
   * Moves a task to a new status column, inserting before `beforeId` in the flat array.
   * Pass `beforeId = null` to append at the end of the target column.
   * Uses optimistic update: applies the move instantly, rolls back on backend failure.
   */
  dropTask(id: string, targetStatus: Task['status'], insertBeforeId: string | null): void {
    const previousTasks = this._tasks();

    this._tasks.update((tasks) => {
      const task = tasks.find((t) => t._id === id);
      if (!task) return tasks;
      const updated = { ...task, status: targetStatus, updatedAt: new Date().toISOString() };
      const remaining = tasks.filter((t) => t._id !== id);
      const at = insertBeforeId
        ? remaining.findIndex((t) => t._id === insertBeforeId)
        : remaining.length;
      return [...remaining.slice(0, at), updated, ...remaining.slice(at)];
    });

    this.updateTask(id, { status: targetStatus } as TaskFormData).subscribe({
      error: () => {
        console.error('Failed to persist task move — rolling back.');
        this._tasks.set(previousTasks);
      },
    });
  }
}

