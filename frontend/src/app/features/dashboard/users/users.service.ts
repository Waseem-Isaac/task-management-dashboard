// Users Service
import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface User {
  _id?: string;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  private _users = signal<User[]>([]);
  readonly users = this._users.asReadonly();
  readonly isLoading = signal(true);

  loadUsers(): void {
    this.http.get<{ users: User[] }>('users').subscribe({
      next: (data) => {
        this._users.set(data.users);
        this.isLoading.set(false);
      },
    });
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`users/${id}`);
  }

  addUser(userData: User): Observable<User> {
    return this.http
      .post<User>('users', userData)
      .pipe(tap((created) => this._users.update((u) => [...u, created])));
  }

  deleteUser(id: string): Observable<void> {
    return this.http
      .delete<void>(`users/${id}`)
      .pipe(tap(() => this._users.update((u) => u.filter((user) => user._id !== id))));
  }

  getAvatarInitials(name: string): string {
    return name
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }
}
