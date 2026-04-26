import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Task, TaskFormData } from './models';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private http = inject(HttpClient);

  // In-memory store — loaded once from JSON, mutated for add/update/delete, Session-lifetime persistence only
  private _tasks = signal<Task[]>([]);
  readonly tasks = this._tasks.asReadonly();
  readonly isLoading = signal(true);

  // Prevent _tasks from being overwritten by the cache interceptor's tap() on repeat calls
  private _loaded = false;

  // httpResource is not used here because _tasks must be mutated (in-memory) after load (add/edit/delete/reorder)
  loadTasks(): Observable<Task[]> {
    if (this._loaded) return of(this._tasks());
    return this.http.get<{ tasks: Task[] }>(`tasks`).pipe(
      tap((data) => {
        this._tasks.set(data.tasks);
        this._loaded = true;
        this.isLoading.set(false);
      }),
      map((data) => data.tasks),
    );
  }

  getTaskById(id: string): Observable<Task | undefined> {
    return this.http.get<Task>(`tasks/${id}`).pipe(map((task) => task || undefined));
  }

  createTask(taskData: TaskFormData): Observable<Task> {
    return this.http.post<Task>(`tasks`, taskData).pipe(
      tap((created) => {
        this._tasks.update((tasks) => [created, ...(tasks ?? [])]);
      }),
    );

    // this._tasks.update((tasks) => [newTask, ...tasks]);
    // return of(newTask);
  }

  updateTask(id: string, taskData: TaskFormData): Observable<Task> {
    return this.http.put<Task>(`tasks/${id}`, taskData).pipe(
      tap((updated) => {
        // Reflect the task in the in-memory signal store to reflect changes immediately in the UI
        this._tasks.update((tasks) => tasks.map((t) => (t._id === id ? updated : t)));
      }),
    );
  }

  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`tasks/${id}`).pipe(
      tap(() => {
        this._tasks.update((tasks) => tasks?.filter((t) => t._id !== id));
      }),
    );
  }

  /**
   * Moves a task to a new status column, inserting before `beforeId` in the flat array.
   * Pass `beforeId = null` to append at the end of the target column.
   * Uses optimistic update: applies the move instantly, rolls back on backend failure.
   */
  dropTask(id: string, targetStatus: Task['status'], insertBeforeId: string | null): void {
    const previousTasks = this._tasks(); // snapshot for rollback

    // Optimistically apply the move in-memory
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

    // Persist to backend — roll back on failure
    this.updateTask(id, { status: targetStatus } as TaskFormData).subscribe({
      error: () => {
        console.error('Failed to persist task move — rolling back.');
        this._tasks.set(previousTasks);
      },
    });
  }
}
