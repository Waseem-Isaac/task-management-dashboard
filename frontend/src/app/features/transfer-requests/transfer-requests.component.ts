/**
 * Team members view displaying user avatars and task assignments.
 */
import { Component, computed, inject, OnInit, signal } from '@angular/core';
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

@Component({
  selector: 'app-transfer-requests',
  imports: [MatIcon, FormsModule, MatSnackBarModule, PaginationComponent, LoadingSpinner, MatTooltip],
  templateUrl: './transfer-requests.component.html',
  styleUrl: './transfer-requests.component.scss',
})
export class TransferRequestsComponent implements OnInit {
  protected transferRequestsService = inject(TransferRequestsService);
  private dialog = inject(MatDialog);
  private snackbar = inject(MatSnackBar);
  protected searchTerm = signal('');
  authService = inject(AuthService);
  protected currentPage = signal(1);
  protected readonly limit = 10;
  activeStatus = signal<'INCOMING' | 'OUTGOING' | 'RESOLVED' | null>(null);
  TRANSFER_REQUEST_STATUS_LABELS = TRANSFER_REQUEST_STATUS_LABELS;
  setFilter(status: 'INCOMING' | 'OUTGOING' | 'RESOLVED' | null): void {
    this.activeStatus.set(status);
  }
  
  ngOnInit(): void {
    this.transferRequestsService.loadTransferRequests(1, this.limit);
  }

  onPageChange(page: number): void {
    this.currentPage.set(page);
    this.transferRequestsService.loadTransferRequests(page, this.limit);
  }

  openAddTransferRequest(): void {
    console.log('on add transfer request');
  }

  approveRequest(requestId: string): void {
    console.log('approve', requestId);
  }

  rejectRequest(requestId: string): void {
    console.log('reject', requestId);
  }

  cancelRequest(requestId: string): void {
    console.log('cancel', requestId);
  }
}
