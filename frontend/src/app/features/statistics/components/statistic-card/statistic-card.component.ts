/**
 * Reusable card component displaying individual statistic with icon and value.
 * DUMB component (presentational, receives data via input)
 */
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { AnalyticsStatistic } from '../../../analytics/analytics.model';

@Component({
  selector: 'app-statistic-card',
  imports: [MatCardModule , MatIcon],
  templateUrl: './statistic-card.component.html',
  styleUrl: './statistic-card.component.scss',
})
export class StatisticCardComponent {
  statistic = input.required<AnalyticsStatistic>();
}
