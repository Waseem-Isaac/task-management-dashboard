/**
 * Statistics overview displaying key metrics cards.
 * SMART component (fetches statistics via service)
 */
import { Component, inject, input } from '@angular/core';
import { StatisticCardComponent } from '../components/statistic-card/statistic-card.component';
import { Statistic } from '../models';

@Component({
  selector: 'app-statistics-list',
  imports: [StatisticCardComponent],
  templateUrl: './statistics-list.component.html',
  styleUrl: './statistics-list.component.scss',
})
export class StatisticsListComponent {
  statistics = input<Statistic[]>();
  isLoading = input<boolean>(false);
}
