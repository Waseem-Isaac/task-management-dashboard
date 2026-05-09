import { Component, input } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { AnalyticsCardPlaceholder } from "../components/analytics-card-placeholder/analytics-card-placeholder";
@Component({
  selector: 'app-completion-rate',
  imports: [MatProgressBar, AnalyticsCardPlaceholder],
  templateUrl: './completion-rate.html',
  styleUrl: './completion-rate.scss',
})
export class CompletionRate {
  completionRateData = input<{ completionRate:number, doneTasks: number, todoTasks: number, inProgressTasks: number }>();
  totalTasks = input<number>(0);
}
