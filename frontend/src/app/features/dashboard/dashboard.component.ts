/**
 * Main dashboard container composing statistics, tasks, analytics and users sections.
 * SMART component (container component)
 */
import { Component } from '@angular/core';
import { StatisticsListComponent } from './statistics/statistics-list/statistics-list.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-dashboard',
  imports: [StatisticsListComponent, TaskListComponent, AnalyticsComponent, UsersComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
