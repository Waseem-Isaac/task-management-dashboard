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
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../../../users/users.service';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { QuillModule } from 'ngx-quill';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { toLocalDateString } from '../../../../../shared/utils/date.utils';
import { TASK_PRIORITY_LABELS, TASK_STATUS_LABELS } from '../../../constants/task.constants';
import { User } from '../../../../../shared/models/user.model';

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
  usersService = inject(UsersService);
  private dialogRef = inject(MatDialogRef<TaskViewComponent>);
  data = inject<{ taskId: string, users: User[] }>(MAT_DIALOG_DATA);
  private snackbar = inject(MatSnackBar);
  task = signal<Task | undefined>(undefined);
  isLoading = signal(true);
  TASK_STATUS_LABELS = TASK_STATUS_LABELS;
  TASK_PRIORITY_LABELS = TASK_PRIORITY_LABELS;
  today = new Date();
  updateOccured: boolean = false;

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
    // pass a flag only in case of task update so that parent component can decide whether to reload data or not. this is to optimize the case where user just wants to view the details without making any changes, in which case we don't need to trigger a reload in the parent component.
    this.dialogRef.close(this.updateOccured);
  }

  /**
   * Inline field update handlers - these are called directly from the template whenever a field is updated, and they immediately send an update request to the server with the new value. This allows for a more seamless editing experience without needing a separate "Edit" mode or "Save" button. Each handler creates an updated task object with the modified field and sends it to the server, then updates the local task signal with the response. Error handling is included to show a snackbar message if the update fails.
   */
  // Single helper to update the task.
  private patchTask(task: Task, patch: Record<string, unknown>, successMsg: string, errorMsg: string): void {
    const payload = { ...task, assignee: task.assignee?._id, reporter: task.reporter?._id, ...patch };
    this.taskService.updateTask(task._id, payload).subscribe({
      next: (updated) => {
        this.task.set(updated);
        this.updateOccured = true;
        this.snackbar.open(successMsg, 'Close', { duration: 3000, panelClass: ['snackbar-success'], horizontalPosition: 'center', verticalPosition: 'top' });
      },
      error: () => {
        this.snackbar.open(errorMsg, 'Close', { duration: 3000, panelClass: ['snackbar-error'], horizontalPosition: 'center', verticalPosition: 'top' });
      },
    });
  }

  updatePriority(task: Task, value: TaskPriority): void {
    this.patchTask(task, { priority: value }, 'Priority updated successfully', 'Failed to update priority');
  }

  updateStatus(task: Task, value: TaskStatus): void {
    this.patchTask(task, { status: value }, 'Status updated successfully', 'Failed to update status');
  }

  /** Title field update related logic */
  isEditingTitle = signal(false);
  commitTitle(task: Task, inputEl: HTMLTextAreaElement): void {
    this.isEditingTitle.set(false);
    this.updateTitle(task, inputEl.value);
  }

  updateTitle(task: Task, newTitle: string): void {
    if (newTitle.trim() === task.title) { this.isEditingTitle.set(false); return; }
    if (!this.validateField('title', newTitle)) return;
    this.patchTask(task, { title: newTitle }, 'Title updated successfully', 'Failed to update title');
  }

  /** Description field update related logic */
  isEditingDescription = signal(false);
  commitDescription(task: Task, newDescription: any): void {
    this.isEditingDescription.set(false);
    if (newDescription.trim() === task.description) return;
    if(!this.validateField('description', newDescription)) return;
    this.updateDescription(task, newDescription);
  }

  updateDescription(task: Task, value: string): void {
    this.patchTask(task, { description: value }, 'Description updated successfully', 'Failed to update description');
  }


  // Assignee update related logic
  loadAssignees(): void {
    if(this.usersService.users().length) return;
    
    return this.usersService.loadUsers(true);
  }

  updateAssignee(task: Task, newAssignee: User): void {
    this.patchTask(task, { assignee: newAssignee._id }, 'Assignee updated successfully', 'Failed to update assignee');
  }

  updateDueDate(task: Task, newDueDate: Date): void {
    this.patchTask(task, { dueDate: toLocalDateString(newDueDate) }, 'Due date updated successfully', 'Failed to update due date');
  }

  // Handle field validations to prevent update in case of invalid data 
  validateField(fieldName: string, value: any): boolean {
    // only title and description should be validated. other field can't have an invalid entery as they are must-choice from dropdowns and datepicker.
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
