import { Component, inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { NgClass, DatePipe } from '@angular/common';
import { Task } from '../../../models';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TasksService } from '../../../tasks.service';
import { LoadingSpinner } from '../../../../../shared/components/loading-spinner/loading-spinner';

@Component({
  selector: 'app-task-view',
  imports: [
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatChipsModule,
    NgClass,
    DatePipe,
    MatSnackBarModule,
    LoadingSpinner
  ],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss',
})
export class TaskViewComponent implements OnInit {
  private taskService = inject(TasksService);
  private dialogRef = inject(MatDialogRef<TaskViewComponent>);
  private data = inject<{ taskId: string }>(MAT_DIALOG_DATA);
  private snackbar = inject(MatSnackBar);
  task = signal<Task | undefined>(undefined);
  isLoading = signal(true);

  statusLabels: Record<string, string> = {
    todo: 'To Do',
    in_progress: 'In Progress',
    done: 'Done',
  };

  ngOnInit(): void {
    if (this.data?.taskId) {
      this.taskService.getTaskById(this.data.taskId).subscribe({
        next: (task) => {
          this.task.set(task);
          this.isLoading.set(false);
        },
        error: () => {
          this.snackbar.open('Failed to load task details.', 'Close', {
            duration: 3000,
            panelClass: ['snackbar-error'],
            horizontalPosition: 'left',
            verticalPosition: 'top'
          });
          this.isLoading.set(false);
        },
      });
    }
  }

  isOverdue(task: Task): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);
    return dueDate < today && task.status !== 'done';
  }

  close(): void {
    this.dialogRef.close();
  }
}
