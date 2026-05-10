/**
 * Analytics dashboard displaying task statistics with grouped bar charts.
 * SMART component (fetches data, contains business logic)
 */
import { Component, effect, inject } from '@angular/core';
import { TasksService } from '../board/tasks.service';
import { StatisticsListComponent } from "../statistics/statistics-list/statistics-list.component";
import { TasksBarChart } from "./tasks-bar-chart/tasks-bar-chart";
import { AnalyticsCardPlaceholder } from './components/analytics-card-placeholder/analytics-card-placeholder';
import { MatFormField } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BoardService } from '../board/board.service';
import { AnalyticsService } from './analytics.service';
import { CompletionRate } from './completion-rate/completion-rate';
import { TasksDoughnutChart } from './tasks-doughnut-chart/tasks-doughnut-chart';
import { TasksPerMember } from "./tasks-per-member/tasks-per-member";
import { LoadingSpinner } from '../../shared/components/loading-spinner/loading-spinner';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ActivityLog } from './activity-log/activity-log';

@Component({
  selector: 'app-analytics',
  imports: [
    StatisticsListComponent, TasksBarChart, 
    MatFormField, MatSelectModule, 
    CompletionRate, TasksDoughnutChart, 
    TasksPerMember, LoadingSpinner, 
    MatIcon, RouterLink, ActivityLog
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent  {
  taskService = inject(TasksService);
  boardsService = inject(BoardService);
  analyticsService = inject(AnalyticsService);

  constructor() {
    this.boardsService.loadBoards().subscribe();

    effect(() => {
      this.analyticsService.getAnalytics(this.boardsService.activeBoard()?._id ?? '').subscribe();
      this.analyticsService.getHistoryLog(this.boardsService.activeBoard()?._id ?? '').subscribe();
    });
  }


  onBoardChange(boardId: string): void {
    const board = this.boardsService.boards().find((b) => b._id === boardId);
    if (board) this.boardsService.setActiveBoard(board);
  }
  
  onTaskUpdated(): void {
    // Reload analytics and history log when a task is updated
    this.analyticsService.getAnalytics(this.boardsService.activeBoard()?._id ?? '').subscribe();
    this.analyticsService.getHistoryLog(this.boardsService.activeBoard()?._id ?? '').subscribe();
  }
}
