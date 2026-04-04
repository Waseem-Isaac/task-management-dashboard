import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { map, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Task, TaskFormData } from "./models";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private http = inject(HttpClient);

  // In-memory store — loaded once from JSON, mutated for add/update/delete, Session-lifetime persistence only
  private _tasks = signal<Task[]>([]);
  readonly tasks = this._tasks.asReadonly();

  // Prevent _tasks from being overwritten by the cache interceptor's tap() on repeat calls
  private loaded = false;

  loadTasks(): Observable<Task[]> {
    if (this.loaded) return of(this._tasks());
    return this.http.get<{ tasks: Task[] }>('/tasks.json').pipe(
      tap((data) => {
        this._tasks.set(data.tasks);
        this.loaded = true;
      }),
      map((data) => data.tasks),
    );
  }

  getTaskById(id: string): Observable<Task | undefined> {
    const found = this._tasks().find(t => t.id === id);
    if (found) return of(found);
    // fallback: load first then find
    return new Observable(observer => {
      this.loadTasks().subscribe(() => {
        observer.next(this._tasks().find(t => t.id === id));
        observer.complete();
      });
    });
  }

  createTask(taskData: TaskFormData): Observable<Task> {
    const newTask: Task = {
      ...taskData,
      id: `task-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this._tasks.update(tasks => [newTask, ...tasks]);
    return of(newTask);
  }

  updateTask(id: string, taskData: TaskFormData): Observable<Task> {
    const existing = this._tasks().find(t => t.id === id);
    const updatedTask: Task = {
      ...taskData,
      id,
      createdAt: existing?.createdAt ?? new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this._tasks.update(tasks => tasks.map(t => t.id === id ? updatedTask : t));
    return of(updatedTask);
  }

  deleteTask(id: string): Observable<void> {
    this._tasks.update(tasks => tasks.filter(t => t.id !== id));
    return of(void 0);
  }

  /**
   * Moves a task to a new status column, inserting before `beforeId` in the flat array.
   * Pass `beforeId = null` to append at the end of the target column.
   */
  dropTask(id: string, targetStatus: Task['status'], insertBeforeId: string | null): void {
    // `update()` receives the current array and expects the new array back
    this._tasks.update(tasks => {
      // Find the task being dragged — bail out if it somehow doesn't exist
      const task = tasks.find(t => t.id === id);
      if (!task) return tasks;

      // Clone the task with its new status and a fresh timestamp
      const updated = { ...task, status: targetStatus, updatedAt: new Date().toISOString() };

      // Remove the dragged task from its current position
      const remaining = tasks.filter(t => t.id !== id);

      // Where to insert: before the anchor task, or at the end if dropped past all cards
      const at = insertBeforeId ? remaining.findIndex(t => t.id === insertBeforeId) : remaining.length;

      // Rebuild the array: everything before `at`, then the moved task, then the rest
      return [...remaining.slice(0, at), updated, ...remaining.slice(at)];
    });
  }
}

