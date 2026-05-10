/**
 * Statistics overview displaying key metrics cards.
 * SMART component (fetches statistics via service)
 */
import { Component, inject, input } from '@angular/core';
import { StatisticCardComponent } from '../components/statistic-card/statistic-card.component';
import { AnalyticsCardPlaceholder } from '../../analytics/components/analytics-card-placeholder/analytics-card-placeholder';
import { AnalyticsStatistic } from '../../analytics/analytics.model';
@Component({
  selector: 'app-statistics-list',
  imports: [StatisticCardComponent, AnalyticsCardPlaceholder],
  templateUrl: './statistics-list.component.html',
  styleUrl: './statistics-list.component.scss',
})
export class StatisticsListComponent {
  statistics = input<AnalyticsStatistic[]>([]);
  isLoading = input<boolean>(false);
}
