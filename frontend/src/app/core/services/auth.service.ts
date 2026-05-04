import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { BoardService } from '../../features/board/board.service';

export interface AuthUser {
  _id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role?: 'TEAM_LEAD' | 'MEMBER';
}

interface AuthResponse {
  token: string;
  user: AuthUser;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface SetPasswordRequest {
  token: string;
  password: string;
  confirmPassword?: string; // TODO: postponed
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private boardService = inject(BoardService);

  private _currentUser = signal<AuthUser | null>(this._loadUser());
  readonly currentUser = this._currentUser.asReadonly();

  get isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>('auth/login', { email, password } satisfies LoginRequest)
      .pipe(tap((res) => this._persist(res)));
  }

  register(user: RegisterRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>('auth/register', user)
      .pipe(tap((res) => this._persist(res)));
  }

  validateInvitation(token: string): Observable<{ email: string; name: string }> {
    return this.http.get<{ email: string; name: string }>(`auth/validate-invitation`, {
      params: { token },
    });
  }

  setPassword(token: string, password: string, confirmPassword: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>('auth/set-password', { token, password, confirmPassword } satisfies SetPasswordRequest)
      .pipe(tap((res) => this._persist(res)));
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    this._currentUser.set(null);
    this.boardService.reset();
    this.router.navigate(['/auth/login']);
  }

  private _persist(res: AuthResponse): void {
    localStorage.setItem('auth_token', res.token);
    localStorage.setItem('auth_user', JSON.stringify(res.user));
    this._currentUser.set(res.user);
  }

  private _loadUser(): AuthUser | null {
    try {
      const raw = localStorage.getItem('auth_user');
      return raw ? (JSON.parse(raw) as AuthUser) : null;
    } catch {
      return null;
    }
  }

  // Update me
  updateProfile(data: Partial<AuthUser>): Observable<AuthUser> {
    return this.http.put<AuthUser>('users/me', data).pipe(
      tap((updated) => {
        const current = this.currentUser();
        if (current) {
          const merged = { ...current, ...updated };
          localStorage.setItem('auth_user', JSON.stringify(merged));
          this._currentUser.set(merged);
        }
      }),
    );
  }
}
