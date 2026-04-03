import { Component, input, output } from '@angular/core';
import { Task } from '../../models';
import { DueDatePipe } from '../../../../../shared/pipes/due-date.pipe';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-task-card',
  imports: [DueDatePipe, NgClass, RouterLink, MatIconModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  deleteRequested = output<string>();
  task = input.required<Task>();

  getInitials(name: string): string {
    return name
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  isOverdue(task: Task): boolean {
    const today = new Date();
    const dueDate = new Date(task.dueDate);
    return dueDate < today && task.status !== 'done';
  }
}
