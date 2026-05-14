/**
 * Team members view displaying user avatars and task assignments.
 */
import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { LoadingSpinner } from '../../shared/components/loading-spinner/loading-spinner';
import { TransferRequestsService } from './transfer-requests.service';
import { TransferRequest } from './transfer-requests.model';
import { TRANSFER_REQUEST_STATUS_LABELS } from './transfer-request.const';
import { MatTooltip } from "@angular/material/tooltip";
import { Confirmable } from '../../shared/decorators/confirmable.decorator';
import { TransferRequestAddComponent } from './transfer-request-add/transfer-request-add.component';

@Component({
  selector: 'app-transfer-requests',
  imports: [MatIcon, FormsModule, MatSnackBarModule, PaginationComponent, LoadingSpinner, MatTooltip],
  templateUrl: './transfer-requests.component.html',
  styleUrl: './transfer-requests.component.scss',
})
export class TransferRequestsComponent implements OnInit, OnDestroy {
  protected transferRequestsService = inject(TransferRequestsService);
  private dialog = inject(MatDialog);
  private snackbar = inject(MatSnackBar);
  protected searchTerm = signal('');
  authService = inject(AuthService);
  protected currentPage = signal(1);
  protected readonly limit = 10;
  activeStatus = signal<'incoming' | 'outgoing' | null>(null);
  TRANSFER_REQUEST_STATUS_LABELS = TRANSFER_REQUEST_STATUS_LABELS;

  setFilter(filterType: 'incoming' | 'outgoing' | null): void {
    this.activeStatus.set(filterType);
    this.transferRequestsService.updateCriteria({ filterType, page: 1 });
    this.transferRequestsService.loadTransferRequests();
  }

  ngOnInit(): void {
    this.transferRequestsService.loadTransferRequests();
  }

  ngOnDestroy(): void {
    this.transferRequestsService.reset();
  }

  onPageChange(page: number): void {
    this.currentPage.set(page);
    this.transferRequestsService.updateCriteria({ page });
    this.transferRequestsService.loadTransferRequests();
  }

  openAddTransferRequest(): void {
    this.dialog.open(TransferRequestAddComponent, { panelClass: 'app-dialog', disableClose: true });
  }

  @Confirmable({
    title: 'Approve Transfer Request',
    message: 'Are you sure you want to approve this transfer request? This will move the member under your management.',
  })
  approveRequest(requestId: string): void {
    this.transferRequestsService.approveTransferRequest(requestId).subscribe({
      next: (res) => {
        this.snackbar.open('Transfer request approved! This member is now under your management.', '', {
          duration: 3000,
          panelClass: ['snackbar-success'], horizontalPosition: 'center', verticalPosition: 'top'
        });
      },
      error: (error) => {
        console.error('Error approving transfer request:', error);
        this.snackbar.open(error?.error?.message || 'Failed to approve transfer request. Please try again.', '', {
          duration: 3000,
          panelClass: ['snackbar-error'], horizontalPosition: 'center', verticalPosition: 'top'
        });
      },
    });
  }

  @Confirmable({
    title: 'Reject Transfer Request',
    message: 'Are you sure you want to reject this transfer request?',
  })
  rejectRequest(requestId: string): void {
    this.transferRequestsService.rejectTransferRequest(requestId).subscribe({
      next: (res) => {
        this.snackbar.open('Transfer request rejected. The requester has been notified.', '', {
          duration: 3000,
          panelClass: ['snackbar-success'], horizontalPosition: 'center', verticalPosition: 'top'
        });
      },
      error: (error) => {
        console.error('Error rejecting transfer request:', error);
        this.snackbar.open(error?.error?.message || 'Failed to reject transfer request. Please try again.', '', {
          duration: 3000,
          panelClass: ['snackbar-error'], horizontalPosition: 'center', verticalPosition: 'top'
        });
      },
    });
  }

  @Confirmable({
    title: 'Cancel Transfer Request',
    message: 'Are you sure you want to cancel this transfer request?',
  })
  cancelRequest(requestId: string): void {
    this.transferRequestsService.deleteTransferRequest(requestId).subscribe({
      next: () => {
        this.snackbar.open('Transfer request cancelled.', '', {
          duration: 3000,
          panelClass: ['snackbar-success'], horizontalPosition: 'center', verticalPosition: 'top'
        });
      },
      error: (error) => {
        console.error('Error cancelling transfer request:', error);
        this.snackbar.open(error?.error?.message || 'Failed to cancel transfer request. Please try again.', '', {
          duration: 3000,
          panelClass: ['snackbar-error'], horizontalPosition: 'center', verticalPosition: 'top'
        });
      },
    });
  }
}
