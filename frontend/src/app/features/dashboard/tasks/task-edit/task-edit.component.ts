/**
 * Task edit dialog loading existing task data and handling update operations.
 * SMART component (manages data loading and submission)
 */
import { Component, inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TaskFormComponent } from '../components/task-form/task-form.component';
import { TaskService } from '../task.service';
import { Task, TaskFormData } from '../models';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [TaskFormComponent, MatDialogModule, MatSnackBarModule, MatButtonModule, MatIconModule],
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent implements OnInit {
  private taskService = inject(TaskService);
  private snackbar = inject(MatSnackBar);
  private dialogRef = inject(MatDialogRef<TaskEditComponent>);
  private data = inject<{ taskId: string }>(MAT_DIALOG_DATA);

  task = signal<Task | undefined>(undefined);
  isLoading = signal(true);
  isSubmitting = signal(false);

  ngOnInit(): void {
    if (this.data?.taskId) {
      this.loadTask(this.data.taskId);
    } else {
      this.isLoading.set(false);
    }
  }

  private loadTask(id: string): void {
    this.taskService.getTaskById(id, true).subscribe({
      next: (task) => {
        if (task) {
          this.task.set(task);
        } else {
          this.snackbar.open('Task not found', '', 
            { 
              duration: 3000 , 
              panelClass: ['snackbar-error'] , horizontalPosition: 'center', verticalPosition: 'top'
            });
        }
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error loading task:', error);
        this.snackbar.open('Failed to load task. Please try again.', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-error'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
        this.isLoading.set(false);
      },
    });
  }

  onFormSubmit(taskData: TaskFormData): void {
    if (!this.task()) return;

    this.isSubmitting.set(true);

    this.taskService.updateTask(this.task()!._id, taskData).subscribe({
      next: (updatedTask) => {
        this.snackbar.open('Task updated successfully!', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-success'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
        this.dialogRef.close(true);
      },
      error: (error) => {
        console.error('Error updating task:', error);
        this.snackbar.open('Failed to update task. Please try again.', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-error'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
        this.isSubmitting.set(false);
      },
      complete: () => {
        this.isSubmitting.set(false);
      },
    });
  }

  onFormCancel(): void {
    this.dialogRef.close();
  }
}
