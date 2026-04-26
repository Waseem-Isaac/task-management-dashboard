import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./tasks/task-list/task-list.component').then((m) => m.TaskListComponent),
  },
  {
    path: 'analytics',
    loadComponent: () =>
      import('./analytics/analytics.component').then((m) => m.AnalyticsComponent),
  },
  {
    path: 'users',
    loadComponent: () => import('./users/users.component').then((m) => m.UsersComponent),
  },
];
