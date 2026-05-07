import { Routes } from '@angular/router';
import { authGuard, noAuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [noAuthGuard],
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },

  {
    path: 'board',
    canActivate: [authGuard],
    loadComponent: () => import('./layout/shell/shell.component').then((m) => m.ShellComponent),
    loadChildren: () => import('./features/board/board.routes').then((m) => m.BOARD_ROUTES),
  },
  {
    path: 'analytics',
    canActivate: [authGuard],
    loadComponent: () => import('./layout/shell/shell.component').then((m) => m.ShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/analytics/analytics.component').then((m) => m.AnalyticsComponent),
        data: { title: 'Analytics Dashboard' },
      },
    ],
  },
  {
    path: 'users',
    canActivate: [authGuard],
    loadComponent: () => import('./layout/shell/shell.component').then((m) => m.ShellComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/users/users.component').then((m) => m.UsersComponent),
        data: { title: 'Team' },
      },
    ],
  },

  // Profile route with auth guard and lazy loading
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () => import('./layout/shell/shell.component').then((m) => m.ShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/profile/profile.component').then((m) => m.ProfileComponent),
        data: { title: 'My Profile' },
      },
    ],
  },
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.Home),
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
