import { inject, Injectable, signal } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, filter } from 'rxjs/operators';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private breakpointObserver = inject(BreakpointObserver);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  readonly isMobile = toSignal(
    this.breakpointObserver.observe('(max-width: 992px)').pipe(map((result) => result.matches)),
    { initialValue: false },
  );

  readonly sidenavOpen = signal(false);

  readonly pageTitle = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) route = route.firstChild;
        return (route.snapshot.data['title'] as string) ?? '';
      }),
    ),
    { initialValue: '' },
  );

  toggle(): void {
    this.sidenavOpen.update((v) => !v);
  }

  close(): void {
    this.sidenavOpen.set(false);
  }
}
