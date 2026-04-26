/**
 * Navigation menu component displaying app routes with icons.
 * SMART component (as it injects LayoutService for responsive behavior)
 */
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { LayoutService } from '../../core/services/layout.service';
import { TaskAddComponent } from '../../features/dashboard/tasks/task-add/task-add.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatListModule, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  protected layout = inject(LayoutService);
  private dialog = inject(MatDialog);

  navItems = [
    { label: 'Dashboard', route: '/dashboard', icon: '📊' },
    { label: 'Tasks', route: '/dashboard/tasks', icon: '✅' },
    { label: 'Analytics', route: '/dashboard/analytics', icon: '📈' },
    { label: 'Team (Users)', route: '/dashboard/users', icon: '👥' },
  ];

  openAddTaskDialog(): void {
    this.dialog.open(TaskAddComponent, { panelClass: 'task-dialog', disableClose: true });
  }
}
