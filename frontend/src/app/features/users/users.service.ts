// Users Service
import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { PaginationMeta } from '../../shared/components/pagination/pagination.component';
import { User, UserFormData } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  authService = inject(AuthService);
  private _users = signal<User[]>([]);
  readonly users = this._users.asReadonly();
  readonly isLoading = signal(true);
  readonly meta = signal<PaginationMeta | null>(null);

  loadUsers(active?: boolean , page = 1, limit = 10): void {
    let params = new HttpParams().set('page', String(page)).set('limit', String(limit));
    if (active === true) params = params.set('active', 'true');
    this.isLoading.set(true);
    this.http.get<{ users: User[]; meta: PaginationMeta }>('users', { params }).subscribe({
      next: (data) => {
        this._users.set(data.users);
        this.meta.set(data.meta);
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

  updateUserTransferStatus(userId: string, managedBy: User['managedBy'], transferStatus: User['transferStatus']): void {
    this._users.update((users) =>
      users.map((u) => (u._id === userId ? { ...u, managedBy, transferStatus } : u))
    );
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

