/**
 * Navigation menu component displaying app routes with icons.
 * SMART component (as it injects LayoutService for responsive behavior)
 */
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { LayoutService } from '../../core/services/layout.service';
import { BoardAddComponent } from '../../features/board/components/board-add/board-add.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatListModule, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  protected layout = inject(LayoutService);
  private dialog = inject(MatDialog);
  authService = inject(AuthService);
  router = inject(Router);

  openAddBoardDialog(): void {
    const dialogRef = this.dialog.open(BoardAddComponent, { panelClass: ['app-dialog', 'sm'], disableClose: true });

      dialogRef.afterClosed().subscribe((res) => {
        console.log('Add Board dialog closed');
        if(res) {
          this.router.navigate(['/board']);
        };
      });
  }
}
