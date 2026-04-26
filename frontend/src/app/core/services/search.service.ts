import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject = new Subject<string>();

  // Debounce keystrokes; only emit when the value actually changes
  readonly searchTerm = toSignal(
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()),
    { initialValue: '' }
  );

  search(term: string): void {
    this.searchSubject.next(term);
  }

  clear(): void {
    this.searchSubject.next('');
  }
}
