import { Component, inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { NgClass, DatePipe } from '@angular/common';
import { Task, TaskPriority, TaskStatus } from '../../../models';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TasksService } from '../../../tasks.service';
import { LoadingSpinner } from '../../../../../shared/components/loading-spinner/loading-spinner';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { quillRequiredValidator } from '../../../../../shared/validators/quill-required.validator';
import { AuthService, AuthUser } from '../../../../../core/services/auth.service';
import { UsersService } from '../../../../users/users.service';
import { MatCalendar, MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { QuillModule } from 'ngx-quill';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { toLocalDateString } from '../../../../../shared/utils/date.utils';

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
    LoadingSpinner,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatDatepickerModule,
    QuillModule,
    FormsModule
  ],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.scss',
})
export class TaskViewComponent implements OnInit {
  private taskService = inject(TasksService);
  private dialogRef = inject(MatDialogRef<TaskViewComponent>);
  data = inject<{ taskId: string, users: AuthUser[] }>(MAT_DIALOG_DATA);
  private snackbar = inject(MatSnackBar);
  task = signal<Task | undefined>(undefined);
  isLoading = signal(true);

  statusLabels: Record<string, string> = {
    todo: 'To Do',
    in_progress: 'In Progress',
    done: 'Done',
  };

  today = new Date();
  taskForm!: FormGroup;
  statusOptions = [
    { value: 'todo' as TaskStatus, label: 'To Do' },
    { value: 'in_progress' as TaskStatus, label: 'In Progress' },
    { value: 'done' as TaskStatus, label: 'Done' },
  ];

  priorityOptions = [
    { value: 'low' as TaskPriority, label: 'Low' },
    { value: 'medium' as TaskPriority, label: 'Medium' },
    { value: 'high' as TaskPriority, label: 'High' },
  ];

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

  /**
   * Inline field update handlers - these are called directly from the template whenever a field is updated, and they immediately send an update request to the server with the new value. This allows for a more seamless editing experience without needing a separate "Edit" mode or "Save" button. Each handler creates an updated task object with the modified field and sends it to the server, then updates the local task signal with the response. Error handling is included to show a snackbar message if the update fails.
   */
  // priority field
  updatePriority(task: Task, newPriority: TaskPriority): void {
    const updatedTask = { ...task, assignee: task.assignee?._id, reporter: task.reporter?._id, priority: newPriority };
    this.taskService.updateTask(task._id, updatedTask).subscribe({
      next: (updated) => {
        this.task.set(updated);
        this.snackbar.open('Priority updated successfully', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-success'],
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      },
      error: () => {
        this.snackbar.open('Failed to update priority', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error'],
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      },
    });
  }

  // status field
  updateStatus(task: Task, newStatus: TaskStatus): void {
    const updatedTask = { ...task, assignee: task.assignee?._id, reporter: task.reporter?._id, status: newStatus };
    this.taskService.updateTask(task._id, updatedTask).subscribe({
      next: (updated) => {
        this.task.set(updated);
        this.snackbar.open('Status updated successfully', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-success'], horizontalPosition: 'center', verticalPosition: 'top'
        });
      },
      error: () => {
        this.snackbar.open('Failed to update status', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error'],
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      },
    });
  }

  // Name text field
  isEditingTitle = signal(false);
  commitTitle(task: Task, inputEl: HTMLTextAreaElement): void {
    this.isEditingTitle.set(false);
    this.updateTitle(task, inputEl.value);
  }

  updateTitle(task: Task, newTitle: string): void {
    if (newTitle.trim() === task.title) {
      this.isEditingTitle.set(false);
      return;
    }

    if(!this.validateField('title', newTitle)) return;

    const updatedTask = { ...task, assignee: task.assignee?._id, reporter: task.reporter?._id, title: newTitle };
    this.taskService.updateTask(task._id, updatedTask).subscribe({
      next: (updated) => {
        this.task.set(updated);
        this.snackbar.open('Title updated successfully', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-success'], horizontalPosition: 'center', verticalPosition: 'top'
        });
      },
      error: () => {
        this.snackbar.open('Failed to update title', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error'],
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      },
    });
  }

  // Description rich text field
  isEditingDescription = signal(false);
  commitDescription(task: Task, newDescription: any): void {
    this.isEditingDescription.set(false);
    if (newDescription.trim() === task.description) return;
    if(!this.validateField('description', newDescription)) return;
    this.updateDescription(task, newDescription);
  }

  updateDescription(task: Task, newDescription: string): void {
    const updatedTask = { ...task, assignee: task.assignee?._id, reporter: task.reporter?._id, description: newDescription };
    this.taskService.updateTask(task._id, updatedTask).subscribe({
      next: (updated) => {
        this.task.set(updated);
        this.snackbar.open('Description updated successfully', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-success'], horizontalPosition: 'center', verticalPosition: 'top'
        });
      },
      error: () => {
        this.snackbar.open('Failed to update description', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error'],
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      },
    });
  }


  // Assignee field
  updateAssignee(task: Task, newAssignee: AuthUser): void {
    const updatedTask = { ...task, assignee: newAssignee._id, reporter: task.reporter?._id };
    this.taskService.updateTask(task._id, updatedTask).subscribe({
      next: (updated) => {
        this.task.set(updated);
        this.snackbar.open('Assignee updated successfully', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-success'], horizontalPosition: 'center', verticalPosition: 'top'
        });
      },
      error: () => {
        this.snackbar.open('Failed to update assignee', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error'],
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      },
    });
  }

  // Due date field
  updateDueDate(task: Task, newDueDate: Date): void {
    const updatedTask = { ...task, assignee: task.assignee?._id, reporter: task.reporter?._id, dueDate: toLocalDateString(newDueDate) };
    this.taskService.updateTask(task._id, updatedTask).subscribe({
      next: (updated) => {
        this.task.set(updated);
        this.snackbar.open('Due date updated successfully', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-success'], horizontalPosition: 'center', verticalPosition: 'top'
        });
      },
      error: () => {
        this.snackbar.open('Failed to update due date', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error'],
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      },
    });
  }

  // Handle field validations to prevent update in case of invalid data (e.g. empty title, past due date, etc.) - this is called from the template before attempting to update a field, and it checks the new value against validation rules. If the value is invalid, it shows a snackbar message and does not proceed with the update. This ensures that only valid data is sent to the server and provides immediate feedback to the user about what needs to be corrected.
  validateField(fieldName: string, value: any): boolean {
    // only title and description should be validated.
    /**
     * for title: required, min length 3
     * for description: required, min length 10 (after stripping HTML tags) as in quillRequiredValidator  from '../../../../../../shared/validators/quill-required.validator'
     */

    if (fieldName === 'title') {
      if (!value || value.trim().length < 3) {
        this.snackbar.open('Title must be at least 3 characters long', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error'],
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        // revert to previous value of the task title in the input field by directly setting the value of the input element (this is a bit of an anti-pattern but allows us to avoid having to manage separate form state for this inline editing scenario)
        const inputEl = document.querySelector('.task-title-input') as HTMLInputElement;
        if (inputEl) {
          inputEl.value = this.task()?.title || '';
        }
        
        return false;
      }

    } else if (fieldName === 'description') {
      const plainText = value.replace(/<[^>]+>/g, '').trim();
      if (!plainText.length) {
        this.snackbar.open('Description must not be empty', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error'],
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });

        // revert to previous value of the task description in the quill editor by directly setting the innerHTML of the editor container (again, a bit of an anti-pattern but avoids needing separate form state)
        const editorContainer = document.querySelector('.task-description-input .ql-editor') as HTMLElement;
        if (editorContainer) {
          editorContainer.innerHTML = this.task()?.description || '';
        }

        return false;
      }
    }

    return true;
  }
    
}
