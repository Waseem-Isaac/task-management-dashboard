import { Component, input } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';
import { AnalyticsCardPlaceholder } from "../components/analytics-card-placeholder/analytics-card-placeholder";
import { CompletionRateData } from '../analytics.model';
@Component({
  selector: 'app-completion-rate',
  imports: [MatProgressBar, AnalyticsCardPlaceholder],
  templateUrl: './completion-rate.html',
  styleUrl: './completion-rate.scss',
})
export class CompletionRate {
  completionRateData = input<CompletionRateData>();
  totalTasks = input<number>(0);
}
