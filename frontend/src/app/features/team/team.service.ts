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
export class TeamService {
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  private _teamMembers = signal<User[]>([]);
  readonly teamMembers = this._teamMembers.asReadonly();
  readonly isLoading = signal(true);
  readonly meta = signal<PaginationMeta | null>(null);

  loadTeamMembers(active?: boolean , page = 1, limit = 10): void {
    let params = new HttpParams().set('page', String(page)).set('limit', String(limit));
    if (active === true) params = params.set('active', 'true');
    this.isLoading.set(true);
    this.http.get<{ users: User[]; meta: PaginationMeta }>('users/me/team', { params }).subscribe({
      next: (data) => {
        this._teamMembers.set(data.users);
        this.meta.set(data.meta);
        this.isLoading.set(false);
      },
    });
  }

  getTeamMemberById(id: string): Observable<User> {
    return this.http.get<User>(`users/${id}`);
  }

  addTeamMember(userData: UserFormData): Observable<User> {
    return this.http
      .post<User>('users', userData)
      .pipe(tap((created) => this._teamMembers.update((u) => [...u, created])));
  }

  deleteTeamMember(id: string): Observable<void> {
    return this.http
      .delete<void>(`users/${id}`)
      .pipe(tap(() => this._teamMembers.update((u) => u.filter((user) => user._id !== id))));
  }

  isItMe(userId: string): boolean {
    return userId === this.authService.currentUser()?._id;
  }
  
}

