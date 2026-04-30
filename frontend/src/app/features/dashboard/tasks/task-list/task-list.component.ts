/**
 * Task list with filtering, search, drag-drop reordering and delete functionality.
 * SMART component (manages state, filtering, and task operations)
 */
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { TaskCardComponent } from '../components/task-card/task-card.component';
import { FilterByStatusPipe } from '../../../../shared/pipes/filter-by-status.pipe';
import { NgClass } from '@angular/common';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { SearchService } from '../../../../core/services/search.service';
import { TaskAddComponent } from '../task-add/task-add.component';
import { TaskEditComponent } from '../task-edit/task-edit.component';
import { Confirmable } from '../../../../shared/decorators/confirmable.decorator';
import { UsersService } from '../../users/users.service';
import { AuthService } from '../../../../core/services/auth.service';
@Component({
  selector: 'app-task-list',
  imports: [
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    TaskCardComponent,
    FilterByStatusPipe,
    NgClass,
    DragDropModule,
  ],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListComponent implements OnInit {
  private taskService = inject(TaskService);
  protected usersService = inject(UsersService);
  private searchService = inject(SearchService);
  private dialog = inject(MatDialog);
  authService = inject(AuthService);
  // Read directly from the service signal — reflects add/update/delete instantly
  tasks = this.taskService.tasks;
  isLoading = this.taskService.isLoading;

  activeStatus = signal<Task['status'] | null>(null);
  activePriority = signal<Task['priority'] | null>(null);
  activeAssignee = signal<string | null>(null);

  ngOnInit(): void {
    // Trigger initial HTTP load (no-op if already loaded)
    this.taskService.loadTasks().subscribe();
    this.usersService.loadUsers(true);
  }

  filteredTasks = computed(() => {
    const status = this.activeStatus();
    const priority = this.activePriority();
    const assignee = this.activeAssignee();
    const query = this.searchService.searchTerm().toLowerCase().trim();
    return this.tasks()?.filter((t) => {
      if (status && t.status !== status) return false;
      if (priority && t.priority !== priority) return false;
      if (assignee && t.assignee?._id !== assignee) return false;
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

  @Confirmable({ title: 'Delete Task', message: 'Are you sure you want to remove this task?' })
  handleDelete(taskId: string): void {
    this.taskService.deleteTask(taskId).subscribe();
  }

  openAddDialog(): void {
    this.dialog.open(TaskAddComponent, { panelClass: 'task-dialog', disableClose: true });
  }

  openEditDialog(taskId: string): void {
    this.dialog.open(TaskEditComponent, {
      panelClass: 'task-dialog',
      disableClose: true,
      data: { taskId },
    });
  }

  onDrop(event: CdkDragDrop<Task['status']>): void {
    const task: Task = event.item.data;
    const targetStatus = event.container.data;
    const insertBeforeId =
      this.filteredTasks()?.filter((t) => t.status === targetStatus && t._id !== task._id)[
        event.currentIndex
      ]?._id ?? null;
    this.taskService.dropTask(task._id, targetStatus, insertBeforeId);
  }
}
