import { Component, inject } from '@angular/core';
import { StatisticCardComponent } from '../components/statistic-card/statistic-card.component';
import { StatisticsService } from '../statistics.service';

@Component({
  selector: 'app-statistics-list',
  imports: [StatisticCardComponent],
  templateUrl: './statistics-list.component.html',
  styleUrl: './statistics-list.component.scss',
})
export class StatisticsListComponent {
  protected statisticsService = inject(StatisticsService);
}
