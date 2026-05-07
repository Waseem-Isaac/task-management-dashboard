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
import { StatisticsService } from '../statistics/statistics.service';

@Component({
  selector: 'app-analytics',
  imports: [StatisticsListComponent, TasksBarChart , AnalyticsCardPlaceholder, MatFormField, MatSelectModule , CompletionRate],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent  {
  taskService = inject(TasksService);
  boardsService = inject(BoardService);
  analyticsService = inject(AnalyticsService);
  statisticsService = inject(StatisticsService);

  constructor() {
    this.boardsService.loadBoards().subscribe();

    effect(() => {
      this.analyticsService.getAnalytics(this.boardsService.activeBoard()?._id ?? '').subscribe();
      this.statisticsService.reload(this.boardsService.activeBoard()?._id ?? '');  // reload statistics for the active board whenever it changes
    });
  }


  onBoardChange(boardId: string): void {
    const board = this.boardsService.boards().find((b) => b._id === boardId);
    if (board) this.boardsService.setActiveBoard(board);
  }
}
