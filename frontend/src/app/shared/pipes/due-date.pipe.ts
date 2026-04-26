import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dueDate',
  standalone: true,
  pure: true,
})
export class DueDatePipe implements PipeTransform {
  transform(dueDate: string): string {
    if (!dueDate) return '';

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const due = new Date(dueDate);
    due.setHours(0, 0, 0, 0);

    const diffMs = due.getTime() - today.getTime();
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Due today';
    if (diffDays === 1) return 'Due tomorrow';
    if (diffDays === -1) return 'Overdue by 1 day';
    if (diffDays > 1) return `Due in ${diffDays} days`;
    return `Overdue by ${Math.abs(diffDays)} days`;
  }
}
