/**
 * Board tasks — Kanban columns with filtering, search, drag-drop and delete.
 * SMART component (manages task state, filtering, and operations)
 */
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { Task } from '../../models';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { TaskCardComponent } from '../task/shared/task-card/task-card.component';
import { FilterByStatusPipe } from '../../../../shared/pipes/filter-by-status.pipe';
import { NgClass } from '@angular/common';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { SearchService } from '../../../../core/services/search.service';
import { TaskAddComponent } from '../task/task-add/task-add.component';
import { TaskViewComponent } from '../task/task-view/task-view.component';
import { Confirmable } from '../../../../shared/decorators/confirmable.decorator';
import { UsersService } from '../../../users/users.service';
import { AuthService } from '../../../../core/services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-board-tasks',
  imports: [
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    TaskCardComponent,
    FilterByStatusPipe,
    NgClass,
    DragDropModule,
    MatSnackBarModule,
  ],
  templateUrl: './board-tasks.component.html',
  styleUrls: ['./board-tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardTasksComponent {
  private taskService = inject(TasksService);
  protected usersService = inject(UsersService);
  private searchService = inject(SearchService);
  private dialog = inject(MatDialog);
  authService = inject(AuthService);
  private snackbar = inject(MatSnackBar);

  tasks = this.taskService.tasks;
  isLoading = this.taskService.isLoading;

  activeStatus = signal<Task['status'] | null>(null);
  activePriority = signal<Task['priority'] | null>(null);
  activeAssignee = signal<string | null>(null);

  constructor() {
    // Re-load tasks whenever the active board changes (initial load + board switching).
    effect(() => {
      this.taskService.loadTasks().subscribe();
    });
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
    this.taskService.deleteTask(taskId).subscribe({
      next: () => {
        this.snackbar.open('Task deleted successfully!', '', {
          duration: 3000,
          panelClass: ['snackbar-success'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      error: (err) => {
        console.error('Error deleting task:', err);
        this.snackbar.open(err?.error?.message || 'Failed to delete task. Please try again.', '', {
          duration: 3000,
          panelClass: ['snackbar-error'],
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
    });
  }

  openAddDialog(): void {
    this.dialog.open(TaskAddComponent, { panelClass: 'app-dialog', disableClose: true });
  }

  openViewDialog(taskId: string): void {
    this.dialog.open(TaskViewComponent, {
      panelClass: 'app-dialog',
      data: { taskId, users: this.usersService.users() },
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
