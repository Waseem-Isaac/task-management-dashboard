/**
 * Reusable card component displaying individual statistic with icon and value.
 * DUMB component (presentational, receives data via input)
 */
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Statistic } from '../../models';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-statistic-card',
  imports: [MatCardModule , MatIcon],
  templateUrl: './statistic-card.component.html',
  styleUrl: './statistic-card.component.scss',
})
export class StatisticCardComponent {
  statistic = input.required<Statistic>();
}
