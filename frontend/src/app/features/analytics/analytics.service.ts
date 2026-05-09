/** Analytics Service */

import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { finalize, Observable, of, tap } from 'rxjs';

export interface Analytics {
  totalTasks: number;

  statusChartData: { labels: string[]; datasets: { label: string, data: number[] }[] };
  completionRateData: { completionRate: number, doneTasks: number, todoTasks: number, inProgressTasks: number };
  priorityBreakdownChartData: { labels: string[]; datasets: { label: string, data: number[] }[] };
  tasksPerMember: { name: string; email: string; avatarUrl: string; taskCount: number }[];
  statistics: { type: string; title: string; value: number; changeSinceYesterday: number }[];
  activity: { /**Todo */ };
}

@Injectable({ providedIn: 'root' })

export class AnalyticsService {
  httpClient = inject(HttpClient);
  private _analytics = signal<Analytics>({} as Analytics);
  readonly analytics = this._analytics.asReadonly();
  readonly isLoading = signal(true);

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

}