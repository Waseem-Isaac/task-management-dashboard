/**
 * Team members view displaying user avatars and task assignments.
 */
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { TeamMemberAddComponent } from './user-add/team-member-add.component';
import { Confirmable } from '../../shared/decorators/confirmable.decorator';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { LoadingSpinner } from '../../shared/components/loading-spinner/loading-spinner';
import { TeamService } from './team.service';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-team',
  imports: [MatIcon, MatIconButton, FormsModule, MatSnackBarModule, PaginationComponent, LoadingSpinner, MatTooltip],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent implements OnInit {
  protected teamService = inject(TeamService);
  private dialog = inject(MatDialog);
  private snackbar = inject(MatSnackBar);
  protected searchTerm = signal('');
  authService = inject(AuthService);
  protected currentPage = signal(1);
  protected readonly limit = 10;
  team = this.teamService.teamMembers;

  private matchesSearch(name: string): boolean {
    const q = this.searchTerm().toLowerCase().trim();
    return !q || name.toLowerCase().includes(q);
  }

  ngOnInit(): void {
    this.teamService.loadTeamMembers(false, 1, this.limit);
  }

  onPageChange(page: number): void {
    this.currentPage.set(page);
    this.teamService.loadTeamMembers(false, page, this.limit);
  }

  openAddUserDialog(): void {
    this.dialog.open(TeamMemberAddComponent, { panelClass: 'app-dialog', disableClose: true });
  }

  @Confirmable({
    title: 'Delete Member',
    message: 'Are you sure you want to remove this team member?',
  })
  deleteUser(id: string): void {
    this.teamService.deleteTeamMember(id).subscribe({
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
}
