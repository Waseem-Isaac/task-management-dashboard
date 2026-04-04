import { computed, Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Statistic } from './models';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  private _resource = httpResource<{ statistics: Statistic[] }>(() => 'statistics.json');

  readonly statistics = computed(() => this._resource.value()?.statistics ?? []);
  readonly isLoading = this._resource.isLoading;
  readonly error = this._resource.error;
}
