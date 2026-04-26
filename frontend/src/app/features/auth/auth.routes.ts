import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'join',
    loadComponent: () => import('./join/join.component').then((m) => m.JoinComponent),
  },
  {
    path: '',
    redirectTo: 'join',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'join',
  },
];
