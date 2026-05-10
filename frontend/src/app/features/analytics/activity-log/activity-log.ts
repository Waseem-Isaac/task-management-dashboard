import { Component, inject, input, output } from '@angular/core';
import { AnalyticsCardPlaceholder } from '../components/analytics-card-placeholder/analytics-card-placeholder';
import { HistoryLogEntry } from '../analytics.model';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';
import { TASK_PRIORITY_LABELS, TASK_STATUS_LABELS } from '../../board/constants/task.constants';
import { TaskViewComponent } from '../../board/components/task/task-view/task-view.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-activity-log',
  imports: [AnalyticsCardPlaceholder, TimeAgoPipe],
  templateUrl: './activity-log.html',
  styleUrl: './activity-log.scss',
})
export class ActivityLog {
  private dialog = inject(MatDialog);
  historyLog = input<HistoryLogEntry[]>([]);
  totalTasks = input<number>(0);
  taskUpdated = output<void>();
  TASK_STATUS_LABELS = TASK_STATUS_LABELS;
  TASK_PRIORITY_LABELS = TASK_PRIORITY_LABELS;

  openViewTaskDialog(taskId: string): void {
    this.dialog.open(TaskViewComponent, {
      panelClass: 'app-dialog',
      data: { taskId, users: [] },
      disableClose: true,
    }).afterClosed().subscribe(result => {
      if(result) {
        this.taskUpdated.emit();
      }
    });
  }
}

