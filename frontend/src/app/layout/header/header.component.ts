/**
 * Application header with search functionality and layout controls.
 * SMART component (manages search state via services)
 */
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../core/services/search.service';
import { LayoutService } from '../../core/services/layout.service';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../core/services/auth.service';
import { UsersService } from '../../features/users/users.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: { '[class.sidenav-open]': 'sidenavOpen()' },
})
export class HeaderComponent {
  private searchService = inject(SearchService);
  protected layoutService = inject(LayoutService);
  protected authService = inject(AuthService);
  protected usersService = inject(UsersService);

  readonly sidenavOpen = computed(
    () => !this.layoutService.isMobile() || this.layoutService.sidenavOpen(),
  );

  // Reflect the debounced signal back for the clear-button visibility check
  readonly searchTerm = this.searchService.searchTerm;

  onSearchChange(value: string): void {
    this.searchService.search(value);
  }

  clearSearch(): void {
    this.searchService.clear();
  }
}
