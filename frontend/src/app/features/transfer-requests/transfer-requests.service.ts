/** Transfer Requests Service */
import { inject, Injectable, signal } from '@angular/core';
import { PaginationMeta } from '../../shared/components/pagination/pagination.component';
import { HttpClient, HttpParams } from '@angular/common/http';
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
 
  loadTransferRequests(page = 1, limit = 10): void {
    let params = new HttpParams().set('page', String(page)).set('limit', String(limit));
    this.isLoading.set(true);

    this.http.get<{ requests: TransferRequest[]; meta: PaginationMeta }>('transfer-requests', { params }).subscribe({
      next: (data) => {
        this._transferRequests.set(data.requests);
        this.meta.set(data.meta);
        this.isLoading.set(false);
      },
    });
  }

  // Add Transfer Request
  addTransferRequest(memberId: string): Observable<TransferRequest> {
    return this.http.post<TransferRequest>('transfer-requests', { memberId }).pipe(
      tap((created) => {
        this._transferRequests.update((requests) => [...requests, created]);
      })
    )
  }

  isItMe(userId: string): boolean {
    return userId === this.authService.currentUser()?._id;
  }
}