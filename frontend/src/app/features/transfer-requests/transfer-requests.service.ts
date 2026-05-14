/** Transfer Requests Service */
import { inject, Injectable, signal } from '@angular/core';
import { PaginationMeta } from '../../shared/components/pagination/pagination.component';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';
import { TransferRequest } from './transfer-requests.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferRequestsService {
  private http = inject(HttpClient);
  authService = inject(AuthService);
  private _transferRequests = signal<TransferRequest[]>([]);
  readonly transferRequests = this._transferRequests.asReadonly();
  readonly isLoading = signal(true);
  readonly meta = signal<PaginationMeta | null>(null);
  
  payloadCriteria = signal<{
    limit: number;
    page: number;
    filterType: 'incoming' | 'outgoing' | null;
  }>({
    limit: 10,
    page: 1,
    filterType: null,
  });

  loadTransferRequests(): void {
    const { filterType, ...rest } = this.payloadCriteria();
    const params = filterType ? { ...rest, filterType } : rest;

    this.isLoading.set(true);

    this.http.get<{ requests: TransferRequest[]; meta: PaginationMeta }>('transfer-requests', { params }).subscribe({
      next: (data) => {
        this._transferRequests.set(data.requests);
        this.meta.set(data.meta);
        this.isLoading.set(false);
      },
    });
  }

  updateCriteria(partial: Partial<{ limit: number; page: number; filterType: 'incoming' | 'outgoing' | null }>): void {
    this.payloadCriteria.update((current) => ({ ...current, ...partial }));
  }

  reset(): void {
    this._transferRequests.set([]);
    this.payloadCriteria.set({ limit: 10, page: 1, filterType: null });
  }

  // Add Transfer Request
  addTransferRequest(memberId: string): Observable<TransferRequest> {
    return this.http.post<TransferRequest>('transfer-requests', { memberId }).pipe(
      tap((created) => {
        this._transferRequests.update((requests) => [created, ...requests]);
      })
    );
  }

  // Approve Transfer Request
  approveTransferRequest(requestId: string): Observable<TransferRequest> {
    return this.http.put<TransferRequest>(`transfer-requests/${requestId}/approve`, {}).pipe(
      tap((updated) => {
        this._transferRequests.update((requests) =>
          requests.map((r) => (r._id === requestId ? updated : r))
        );
      })
    );
  }
  
  // Reject Transfer Request
  rejectTransferRequest(requestId: string): Observable<TransferRequest> {
    return this.http.put<TransferRequest>(`transfer-requests/${requestId}/reject`, {}).pipe(
      tap((updated) => {
        this._transferRequests.update((requests) =>
          requests.map((r) => (r._id === requestId ? updated : r))
        );
      })
    );
  }

  // Delete/Cancel Transfer Request
  deleteTransferRequest(requestId: string): Observable<void> {
    return this.http.delete<void>(`transfer-requests/${requestId}`).pipe(
      tap(() => {
        this._transferRequests.update((requests) =>
          requests.filter((r) => r._id !== requestId)
        );
      })
    );
  }

  isItMe(userId: string): boolean {
    return userId === this.authService.currentUser()?._id;
  }
}