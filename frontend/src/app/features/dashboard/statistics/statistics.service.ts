import { computed, Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, timer } from 'rxjs';
import { Statistic } from './models';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  private _resource = httpResource<{ statistics: Statistic[] }>(
    () => 'http://localhost:4200/statistics.json',
  );
  private _simulatingLoad = toSignal(timer(1000).pipe(map(() => false)), { initialValue: true });

  readonly statistics = computed(() => this._resource.value()?.statistics ?? []);
  readonly isLoading = computed(() => this._resource.isLoading() || this._simulatingLoad());
  readonly error = this._resource.error;
}
