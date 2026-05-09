/**
 * Reusable reactive form for creating and editing tasks with validation.
 * DUMB component (presentational, delegates business logic via outputs)
 */
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Task, TaskFormData } from '../../../../models';
import { UsersService } from '../../../../../users/users.service';
import { AuthService } from '../../../../../../core/services/auth.service';
import { QuillModule } from 'ngx-quill';
import { quillRequiredValidator } from '../../../../../../shared/validators/quill-required.validator';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    QuillModule
  ],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  @Input() task?: Task;
  @Input() submitButtonText = 'Submit';
  @Output() formSubmit = new EventEmitter<TaskFormData>();
  @Output() formCancel = new EventEmitter<void>();
  authService = inject(AuthService);
  today = new Date();
  taskForm!: FormGroup;
  fb = inject(FormBuilder);
  usersService = inject(UsersService);

  statusOptions = [
    { value: 'todo', label: 'To Do' },
    { value: 'in_progress', label: 'In Progress' },
    { value: 'done', label: 'Done' },
  ];

  priorityOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.initForm();
    this.usersService.loadUsers(true);
  }

  private initForm(): void {
    this.taskForm = this.fb.group({
      title: [this.task?.title || '', [Validators.required, Validators.minLength(3)]],
      description: [this.task?.description || '', [quillRequiredValidator]],
      status: [this.task?.status || 'todo', [Validators.required]],
      priority: [this.task?.priority, [Validators.required]],
      dueDate: [
        this.task?.dueDate ? new Date(this.task.dueDate + 'T00:00:00') : null,
        [Validators.required],
      ],
      assignee: [this.task?.assignee?._id || this.authService.currentUser()?._id, [Validators.required]],
      reporter: [this.task?.reporter?._id || this.authService.currentUser()?._id, [Validators.required]],
      tags: [this.task?.tags || []],
    });

    if (this.task) {
      this.taskForm.markAllAsTouched();
    }
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const formValue = { ...this.taskForm.value };
      // Convert Date object back to ISO date string (YYYY-MM-DD)
      if (formValue.dueDate instanceof Date) {
        const d = formValue.dueDate;
        formValue.dueDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      }

      this.formSubmit.emit({ ...formValue });
    } else {
      this.taskForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.formCancel.emit();
  }

  getFieldError(fieldName: string): string {
    const field = this.taskForm.get(fieldName);
    if (field?.hasError('required')) {
      return 'This field is required';
    }
    if (field?.hasError('minlength')) {
      return `Minimum length is ${field.errors?.['minlength'].requiredLength}`;
    }
    if (field?.hasError('email')) {
      return 'Invalid email format';
    }
    if (fieldName === 'dueDate') {
      if (field?.hasError('matDatepickerMin')) {
        return 'Due date cannot be in the past';
      }
      if (field?.hasError('matDatepickerMax')) {
        return 'Due date cannot be in the future';
      }
    }

    return '';
  }
}
