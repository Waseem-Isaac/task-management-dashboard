import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../core/services/auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-profile',
  imports: [MatIconModule, MatDividerModule, MatButtonModule, MatTooltipModule, MatFormFieldModule, MatInputModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  authService = inject(AuthService);
  copied = false;
  nameEditable = false;
  copyId(): void {
    const id = this.authService.currentUser()?._id;
    if (!id) return;
    navigator.clipboard.writeText(id).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000);
    });
  }

  updateMyName(newName: string): void {
     if (newName.trim() === this.authService.currentUser()?.name) return;
    this.authService.updateProfile({ name: newName.trim() }).subscribe({
      error: (error) => console.error('Error updating profile name:', error),
    });
  }
}
