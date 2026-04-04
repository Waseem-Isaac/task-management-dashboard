import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../core/services/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private searchService = inject(SearchService);

  // Reflect the debounced signal back for the clear-button visibility check
  readonly searchTerm = this.searchService.searchTerm;

  onSearchChange(value: string): void {
    this.searchService.search(value);
  }

  clearSearch(): void {
    this.searchService.clear();
  }
}
