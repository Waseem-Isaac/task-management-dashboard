/** Analytics Service */

import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { finalize, Observable, of, tap } from 'rxjs';
import { Analytics } from './analytics.model';
@Injectable({ providedIn: 'root' })

export class AnalyticsService {
  httpClient = inject(HttpClient);
  private _analytics = signal<Analytics>({} as Analytics);
  readonly analytics = this._analytics.asReadonly();
  readonly isLoading = signal(true);

  private _historyLog = signal<any[]>([]);
  readonly historyLog = this._historyLog.asReadonly();
  readonly isHistoryLogLoading = signal(true);

  // Example method to fetch analytics data
  getAnalytics(boardId: string): Observable<Analytics> {
    this._analytics.set({} as Analytics);

    this.isLoading.set(true);
    if (!boardId) {
      this.isLoading.set(false);
      return of({} as Analytics);
    }

    return this.httpClient.get<Analytics>(`boards/${boardId}/analytics`).pipe(
      finalize(() => this.isLoading.set(false)),
      tap((data) => {
        this._analytics.set(data);
      }),
    );
  }

  /**
   *  taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
      type: { type: String, required: true, enum: ['status_change', 'priority_change', 'assignee_change'] },
      oldValue: { type: String, required: true },
      newValue: { type: String, required: true },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
   */
  getHistoryLog(boardId: string): Observable<any> {
    if (!boardId) {
      return of([]);
    }
    this.isHistoryLogLoading.set(true);
    return this.httpClient.get<any>(`boards/${boardId}/analytics/history`).pipe(
      finalize(() => this.isHistoryLogLoading.set(false)),
      tap((data) => {
        this._historyLog.set(data);
      }),
    );
  }

}