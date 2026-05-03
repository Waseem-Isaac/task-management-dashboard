
import { computed, Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, timer } from 'rxjs';
import { Statistic } from './models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  // Use try-catch to handle potential errors during resource initialization
  private _resource: ReturnType<typeof httpResource<{ statistics: Statistic[] }>> | null = null;
  private _resourceError: any = null;
  private _simulatingLoad = toSignal(timer(1000).pipe(map(() => false)), { initialValue: true });

  constructor() {
    try {
      this._resource = httpResource<{ statistics: Statistic[] }>(
        () => `${environment.apiUrl}statistics`,
      );
    } catch (err) {
      this._resourceError = err;
      this._resource = null;
    }
  }

  readonly statistics = computed(() => {
    if (this._resourceError) {
      return [];
    }
    try {
      return this._resource?.value()?.statistics ?? [];
    } catch (err) {
      return [];
    }
  });

  readonly isLoading = computed(() => {
    if (this._resourceError) {
      return false;
    }
    return this._resource?.isLoading() || this._simulatingLoad();
  });

  readonly error = computed(() => {
    return this._resourceError || this._resource?.error;
  });

  reload(): void {
    if (this._resourceError || !this._resource) {
      return;
    }
    this._resource.reload();
  }
}
