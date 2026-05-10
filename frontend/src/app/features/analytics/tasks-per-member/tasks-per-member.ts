import { Component, input } from '@angular/core';
import { MatProgressBar } from "@angular/material/progress-bar";
import { AnalyticsCardPlaceholder } from '../components/analytics-card-placeholder/analytics-card-placeholder';
import { AnalyticsMember } from '../analytics.model';

@Component({
  selector: 'app-tasks-per-member',
  imports: [MatProgressBar , AnalyticsCardPlaceholder],
  templateUrl: './tasks-per-member.html',
  styleUrl: './tasks-per-member.scss',
})
export class TasksPerMember {
  members = input<AnalyticsMember[]>([]);
  totalTasks = input<number>(0);

  getMemberLoadPercentage(memberTaskCount: number): number {
    if (this.totalTasks() === 0) return 0;
    return (memberTaskCount / this.totalTasks()) * 100;
  }
}

