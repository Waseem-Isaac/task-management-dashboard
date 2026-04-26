/**
 * Team members view displaying user avatars and task assignments.
 * SMART component (loads data via TaskService)
 */
import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { UserAddComponent } from './user-add/user-add.component';
import { Confirmable } from '../../../shared/decorators/confirmable.decorator';

@Component({
  selector: 'app-users',
  imports: [MatIcon, MatIconButton],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  protected usersService = inject(UsersService);
  private dialog = inject(MatDialog);

  ngOnInit(): void {
    this.usersService.loadUsers();
  }

  openAddUserDialog(): void {
    this.dialog.open(UserAddComponent, { panelClass: 'task-dialog', disableClose: true });
  }

  @Confirmable({
    title: 'Delete Member',
    message: 'Are you sure you want to remove this team member?',
  })
  deleteUser(id: string): void {
    this.usersService.deleteUser(id).subscribe();
  }
}
