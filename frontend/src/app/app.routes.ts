import { Routes } from '@angular/router';
import { authGuard, noAuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [noAuthGuard],
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },

  {

    path: 'tasks',
    canActivate: [authGuard],
    loadComponent: () => import('./layout/shell/shell.component').then((m) => m.ShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/tasks/task-list/task-list.component').then((m) => m.TaskListComponent),
        data: { title: 'Tasks' },
      },
    ],

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
        data: { title: 'Analytics' },
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
        data: { title: 'Users' },
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
