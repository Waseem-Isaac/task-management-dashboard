import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { tap } from "rxjs/operators";
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

  private loaded = false;

  loadTasks(): Observable<Task[]> {
    if (this.loaded) return of(this._tasks());
    return this.http.get<{ tasks: Task[] }>('/tasks.json').pipe(
      tap((data) => {
        this._tasks.set(data.tasks);
        this.loaded = true;
      }),
      // return just the array downstream if needed
      // map stays unused — callers use tasks signal directly
    ) as unknown as Observable<Task[]>;
  }

  getTasks(): Observable<Task[]> {
    return this.loadTasks();
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
}

