import { inject, Injectable, signal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private breakpointObserver = inject(BreakpointObserver);

  readonly isMobile = toSignal(
    this.breakpointObserver.observe('(max-width: 992px)').pipe(map((result) => result.matches)),
    { initialValue: false },
  );

  readonly sidenavOpen = signal(false);

  toggle(): void {
    this.sidenavOpen.update((v) => !v);
  }

  close(): void {
    this.sidenavOpen.set(false);
  }
}
