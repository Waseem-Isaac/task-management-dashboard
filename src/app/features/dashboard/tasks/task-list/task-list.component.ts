import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskCardComponent } from '../components/task-card/task-card.component';
import { FilterByStatusPipe } from '../../../../shared/pipes/filter-by-status.pipe';
import { NgClass } from '@angular/common';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { SearchService } from '../../../../core/services/search.service';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink, MatIconModule, MatSelectModule, MatFormFieldModule, TaskCardComponent, FilterByStatusPipe, NgClass, DragDropModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit {
  private taskService = inject(TaskService);
  private searchService = inject(SearchService);

  // Read directly from the service signal — reflects add/update/delete instantly
  tasks = this.taskService.tasks;

  activeStatus = signal<Task['status'] | null>(null);
  activePriority = signal<Task['priority'] | null>(null);
  activeAssignee = signal<string | null>(null);

  ngOnInit(): void {
    // Trigger initial HTTP load (no-op if already loaded)
    this.taskService.loadTasks().subscribe();
  }

  filteredTasks = computed(() => {
    const status = this.activeStatus();
    const priority = this.activePriority();
    const assignee = this.activeAssignee();
    const query = this.searchService.searchTerm().toLowerCase().trim();
    return this.tasks().filter((t) => {
      if (status && t.status !== status) return false;
      if (priority && t.priority !== priority) return false;
      if (assignee && t.assignee.id !== assignee) return false;
      if (query) {
        const inTitle = t.title.toLowerCase().includes(query);
        const inDescription = t.description.toLowerCase().includes(query);
        if (!inTitle && !inDescription) return false;
      }
      return true;
    });
  });

  columns: { status: Task['status']; label: string }[] = [
    { status: 'todo', label: 'TO DO' },
    { status: 'in_progress', label: 'IN PROGRESS' },
    { status: 'done', label: 'DONE' },
  ];

  setFilter(status: Task['status'] | null): void {
    this.activeStatus.set(status);
  }

  handleDelete(taskId: string): void {
    this.taskService.deleteTask(taskId).subscribe();
  }

  onDrop(event: CdkDragDrop<Task['status']>): void {
    const task: Task = event.item.data;
    const targetStatus = event.container.data;
    const insertBeforeId = this.filteredTasks()
      .filter(t => t.status === targetStatus && t.id !== task.id)[event.currentIndex]?.id ?? null;
    this.taskService.dropTask(task.id, targetStatus, insertBeforeId);
  }

  assignees = computed(() => {
    const seen = new Set<string>();
    return this.tasks()
      .filter((t) => {
        if (seen.has(t.assignee.id)) return false;
        seen.add(t.assignee.id);
        return true;
      })
      .map((t) => ({ id: t.assignee.id, name: t.assignee.name }));
  });
}
