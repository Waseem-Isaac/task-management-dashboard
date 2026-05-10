/**
 * Reusable task card displaying task details with status, priority, and actions.
 * DUMB component (presentational, receives task via input)
 */
import { Component, inject, input, output } from '@angular/core';
import { Task } from '../../../../models';
import { DatePipe, NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { UsersService } from '../../../../../users/users.service';
import { StripHtmlPipe } from '../../../../../../shared/pipes/strip-html.pipe';

@Component({
  selector: 'app-task-card',
  imports: [ NgClass, MatIconModule, MatMenuModule, DatePipe , StripHtmlPipe],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  deleteRequested = output<string>();
  viewRequested = output<string>();
  task = input.required<Task>();
  usersService = inject(UsersService);

  isOverdue(task: Task): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);
    return dueDate < today && task.status !== 'done';
  }
}
