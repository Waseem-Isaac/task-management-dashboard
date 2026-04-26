/**
 * Task creation dialog handling new task submission.
 * SMART component (manages task creation via service)
 */
import { Component, inject, signal } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { TaskFormComponent } from '../components/task-form/task-form.component';
import { TaskService } from '../task.service';
import { TaskFormData } from '../models';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [TaskFormComponent, MatDialogModule],
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent {
  private taskService = inject(TaskService);
  private dialogRef = inject(MatDialogRef<TaskAddComponent>);

  isSubmitting = signal(false);
  errorMessage = signal('');

  onFormSubmit(taskData: TaskFormData): void {
    this.isSubmitting.set(true);
    this.errorMessage.set('');

    this.taskService.createTask(taskData).subscribe({
      next: () => {
        /** Tasks updated in the service signal automatically */
        this.dialogRef.close(true);
      },
      error: (error) => {
        console.error('Error creating task:', error);
        this.errorMessage.set('Failed to create task. Please try again.');
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
