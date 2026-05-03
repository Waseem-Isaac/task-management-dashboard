/**
 * Task creation dialog handling new task submission.
 * SMART component (manages task creation via service)
 */
import { Component, inject, signal } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TaskFormComponent } from '../shared/task-form/task-form.component';
import { TaskFormData } from '../../../models';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TasksService } from '../../../tasks.service';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [TaskFormComponent, MatDialogModule, MatSnackBarModule , MatIconModule , MatButtonModule],
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent {
  private taskService = inject(TasksService);
  private dialogRef = inject(MatDialogRef<TaskAddComponent>);
  private snackbar = inject(MatSnackBar);
  isSubmitting = signal(false);

  onFormSubmit(taskData: TaskFormData): void {
    this.isSubmitting.set(true);

    this.taskService.createTask(taskData).subscribe({
      next: () => {
        /** Tasks updated in the service signal automatically */
        this.dialogRef.close(true);
        this.snackbar.open('Task created successfully!', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-success'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
      },
      error: (error) => {
        console.error('Error creating task:', error);
        this.snackbar.open('Failed to create task. Please try again.', '', 
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
