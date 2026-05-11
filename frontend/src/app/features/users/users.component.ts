/**
 * Team members view displaying user avatars and task assignments.
 */
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UsersService } from './users.service';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { UserAddComponent } from './user-add/user-add.component';
import { Confirmable } from '../../shared/decorators/confirmable.decorator';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { LoadingSpinner } from '../../shared/components/loading-spinner/loading-spinner';
import { TransferRequestsService } from '../transfer-requests/transfer-requests.service';

@Component({
  selector: 'app-users',
  imports: [MatIcon, MatIconButton, FormsModule, MatSnackBarModule, PaginationComponent, LoadingSpinner],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  protected usersService = inject(UsersService);
  private dialog = inject(MatDialog);
  private snackbar = inject(MatSnackBar);
  protected searchTerm = signal('');
  authService = inject(AuthService);
  protected currentPage = signal(1);
  protected readonly limit = 10;
  users = this.usersService.users;
  private transferRequestsService = inject(TransferRequestsService);

  private matchesSearch(name: string): boolean {
    const q = this.searchTerm().toLowerCase().trim();
    return !q || name.toLowerCase().includes(q);
  }

  ngOnInit(): void {
    this.usersService.loadUsers(false, 1, this.limit);
  }

  onPageChange(page: number): void {
    this.currentPage.set(page);
    this.usersService.loadUsers(false, page, this.limit);
  }

  openAddUserDialog(): void {
    this.dialog.open(UserAddComponent, { panelClass: 'app-dialog', disableClose: true });
  }

  @Confirmable({
    title: 'Delete Member',
    message: 'Are you sure you want to remove this team member?',
  })
  deleteUser(id: string): void {
    this.usersService.deleteUser(id).subscribe({
      next: () => {
        this.snackbar.open('User deleted successfully!', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-success'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
      },
      error: (err) => {
        this.snackbar.open(err?.error?.message || 'Failed to delete user. Please try again.', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-error'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
      },
    });
  }

  // 
  @Confirmable({
    title: 'Request Transfer',
    message: 'Are you sure you want to request that this member be transferred to be under your management ?',
  })
  requestTransfer(memberId: string): void {
    this.transferRequestsService.addTransferRequest(memberId).subscribe({
      next: () => {
        this.snackbar.open('Transfer request sent successfully!', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-success'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
      },
      error: (err) => {
        this.snackbar.open(err?.error?.message || 'Failed to send transfer request. Please try again.', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-error'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
      },
    });
  }
}
