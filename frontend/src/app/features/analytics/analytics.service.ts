/** Analytics Service */

import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

export interface Analytics {
  totalTasks: number;

  statusChartData: { labels: string[]; datasets: {label: string, data: number[]}[] };
  completionRateData: { completionRate:number, doneCount: number, todoCount: number, inProgressCount: number, overdueCount: number };
  priorityBreakdownChartData: { labels: string[]; datasets: {label: string, data: number[]}[] };
  tasksPerMember: { name: string; email: string; avatarUrl: string; taskCount: number }[];
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
    return this.httpClient.get<Analytics>(`boards/${boardId}/analytics`).pipe(
      tap((data) => {
        this._analytics.set(data);
        this.isLoading.set(false);
      }),
    );
  }

}