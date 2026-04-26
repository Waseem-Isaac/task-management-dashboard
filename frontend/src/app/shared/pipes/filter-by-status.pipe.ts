import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../../features/dashboard/tasks/models';

@Pipe({
  name: 'filterByStatus',
  standalone: true,
  pure: true,
})
export class FilterByStatusPipe implements PipeTransform {
  transform(tasks: Task[], status: Task['status'] | null): Task[] {
    if (!tasks) return [];
    if (!status) return tasks;
    return tasks.filter((task) => task.status === status);
  }
}
