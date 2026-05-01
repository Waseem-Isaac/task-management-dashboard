// Users Service
import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';

export interface User {
  _id: string;
  name: string;
  email: string;
  active?: boolean;
  avatarUrl?: string;
}

export interface UserFormData {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  authService = inject(AuthService);
  private _users = signal<User[]>([]);
  readonly users = this._users.asReadonly();
  readonly isLoading = signal(true);

  loadUsers(active?: boolean): void {
    const params = active === true ? new HttpParams().set('active', 'true') : new HttpParams();
    this.http.get<{ users: User[] }>('users', { params }).subscribe({
      next: (data) => {
        this._users.set(data.users);
        this.isLoading.set(false);
      },
    });
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`users/${id}`);
  }

  addUser(userData: UserFormData): Observable<User> {
    return this.http
      .post<User>('users', userData)
      .pipe(tap((created) => this._users.update((u) => [...u, created])));
  }

  deleteUser(id: string): Observable<void> {
    return this.http
      .delete<void>(`users/${id}`)
      .pipe(tap(() => this._users.update((u) => u.filter((user) => user._id !== id))));
  }

  getAvatarInitials(name?: string): string {
    if (!name) return '?';
    return name
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  /**
  * Hashes a string to a consistent HSL color.
  */
  getAvatarColor(name?: string): string {
    if (!name) return 'var(--color-neutral)';
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const hue = Math.abs(hash) % 360;
    return `hsl(${hue}, 60%, 70%)`;
  }

  isItMe(userId: string): boolean {
    return userId === this.authService.currentUser()?._id;
  }
  
}

