import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { TransferRequestsService } from '../transfer-requests.service';
import { UsersService } from '../../users/users.service';
import { User } from '../../../shared/models/user.model';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { LoadingSpinner } from '../../../shared/components/loading-spinner/loading-spinner';

@Component({
  selector: 'app-transfer-request-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    LoadingSpinner
  ],
  templateUrl: './transfer-request-add.component.html',
  styleUrls: ['./transfer-request-add.component.scss'],
})
export class TransferRequestAddComponent implements OnInit, OnDestroy {
  private transferRequestsService = inject(TransferRequestsService);
  private dialogRef = inject(MatDialogRef<TransferRequestAddComponent>);
  private snackbar = inject(MatSnackBar);
  usersService = inject(UsersService);
  searchControl = new FormControl('');
  selectedMemberControl = new FormControl();
  ngOnInit(): void {
    this.usersService.updateCriteria({ eligibleForTransfer: true });
    this.usersService.loadUsers().subscribe();
  }

  onSearch(): void {
    this.usersService.updateCriteria({ search: this.searchControl.value, page: 1 });
    this.usersService.loadUsers().subscribe();
  } 


  onListScroll(event: Event): void {
    const el = event.target as HTMLElement;
    const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 80;
    if (!nearBottom) return;

    const meta = this.usersService.meta();
    if (!meta || this.usersService.isLoading()) return;
    if (this.usersService.payloadCriteria().page >= meta.totalPages) return;

    this.usersService.updateCriteria({ page: this.usersService.payloadCriteria().page + 1 });
    this.usersService.loadUsers(true).subscribe();
  }

  ngOnDestroy(): void {
    this.usersService.reset();
  }

  onSubmit(): void {
    const memberId = this.selectedMemberControl.value;

    this.transferRequestsService.addTransferRequest(memberId).subscribe({
      next: () => {
        this.dialogRef.close(true);
        this.snackbar.open('Transfer request created successfully!', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-success'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
      },
      error: (err) => {
        console.error('Error creating transfer request:', err);
        this.snackbar.open(err?.error?.message || 'Failed to create transfer request. Please try again.', '', 
          { 
            duration: 3000 , 
            panelClass: ['snackbar-error'] , horizontalPosition: 'center', verticalPosition: 'top'
          });
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
