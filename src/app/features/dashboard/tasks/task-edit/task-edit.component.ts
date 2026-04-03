import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskFormComponent } from '../components/task-form/task-form.component';
import { TaskService } from '../task.service';
import { Task, TaskFormData } from '../models';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [TaskFormComponent],
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent implements OnInit {
  private taskService = inject(TaskService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  task = signal<Task | undefined>(undefined);
  isLoading = signal(true);
  isSubmitting = signal(false);
  errorMessage = signal('');

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.loadTask(taskId);
    } else {
      this.errorMessage.set('No task ID provided');
      this.isLoading.set(false);
    }
  }

  private loadTask(id: string): void {
    this.taskService.getTaskById(id).subscribe({
      next: (task) => {
        if (task) {
          this.task.set(task);
        } else {
          this.errorMessage.set('Task not found');
        }
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Error loading task:', error);
        this.errorMessage.set('Failed to load task. Please try again.');
        this.isLoading.set(false);
      }
    });
  }

  onFormSubmit(taskData: TaskFormData): void {
    if (!this.task()) return;

    this.isSubmitting.set(true);
    this.errorMessage.set('');

    this.taskService.updateTask(this.task()!.id, taskData).subscribe({
      next: (updatedTask) => {
        /** Tasks updated in the service signal automatically */
        console.log('Task updated successfully:', updatedTask);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Error updating task:', error);
        this.errorMessage.set('Failed to update task. Please try again.');
        this.isSubmitting.set(false);
      },
      complete: () => {
        this.isSubmitting.set(false);
      }
    });
  }

  onFormCancel(): void {
    this.router.navigate(['/dashboard']);
  }
}
