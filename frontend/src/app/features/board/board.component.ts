/**
 * Board shell — renders the board header and delegates task management to BoardTasksComponent.
 * SMART component (manages board-level state: active board selection)
 */
import { ChangeDetectionStrategy, Component, effect, ElementRef, inject, OnInit, viewChild, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BoardTasksComponent } from './components/board-tasks/board-tasks.component';
import { BoardService } from './board.service';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { BoardAddComponent } from './components/board-add/board-add.component';
import { AuthService } from '../../core/services/auth.service';
import { Confirmable } from '../../shared/decorators/confirmable.decorator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { LoadingSpinner } from "../../shared/components/loading-spinner/loading-spinner";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-board',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BoardTasksComponent,
    MatIcon,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    LoadingSpinner,
    FormsModule
  ],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent implements OnInit {
  boardsService = inject(BoardService);
  authService = inject(AuthService);
  private dialog = inject(MatDialog);
  private snackbar = inject(MatSnackBar);
  activeBoard = this.boardsService.activeBoard;
  boards = this.boardsService.boards;
  isLoading = this.boardsService.isLoading;
  boardNameFieldEnabled = false;
  @ViewChild('mirror') mirror!: ElementRef;
  @ViewChild('nameInput') nameInput!: ElementRef;

  constructor() {
    effect(() => {
      const name = this.activeBoard()?.name;
      setTimeout(() => this.adjustNameInputWidth(name), 0);
    });
  }

  ngOnInit(): void {
    this.boardsService.loadBoards().subscribe();
  }

  ngAfterViewInit() {
    setTimeout(() => this.adjustNameInputWidth(), 0);
  }

  onBoardChange(boardId: string): void {
    const board = this.boards().find((b) => b._id === boardId);
    if (board) this.boardsService.setActiveBoard(board);
  }

  openAddBoardDialog(): void {
    this.dialog.open(BoardAddComponent, { panelClass: ['app-dialog', 'sm'], disableClose: true });
  }

  updateBoardName(boardId: string | undefined, newName: string, inputEl: HTMLInputElement): void {
    const oldName = this.activeBoard()?.name;
    if (!boardId) return;
    if (newName.trim() === oldName) return;
    this.boardsService.updateBoard(boardId, { name: newName.trim() }).subscribe({
      error: () => {
        this.snackbar.open('Failed to update board name', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error'], horizontalPosition: 'center', verticalPosition: 'top'
        });
        inputEl.value = oldName || '';
      },
    });
  }

  @Confirmable({ title: 'Delete Board', message: 'Are you sure you want to delete this board? This action cannot be undone and will permanently remove all associated tasks.' })
  deleteBoard(boardId: string | undefined, event: MouseEvent): void {
    if (!boardId) return;
    event.stopPropagation();
    this.boardsService.deleteBoard(boardId).subscribe({
      next: () => {
        // show a success message, then automatically select another board if available
        const remainingBoards = this.boards().filter((b) => b._id !== boardId);
        if (remainingBoards.length > 0) {
          this.boardsService.setActiveBoard(remainingBoards[0]);
        }
      },
      error: (error) => {
        this.snackbar.open('Failed to delete board', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error'], horizontalPosition: 'center', verticalPosition: 'top'
        });
      },
    });
  }

  // Dynamically adjust the width of the board name input to fit its content 
  adjustNameInputWidth(value?: string): void {
    const inputValue = value !== undefined
      ? value  // ← read live from event
      : this.nameInput.nativeElement.value;       // ← fallback for initial call

    this.mirror.nativeElement.textContent = inputValue || ' '; // ← push to mirror manually

    const mirrorWidth = this.mirror.nativeElement.offsetWidth;
    this.nameInput.nativeElement.style.width = `${Math.max(80, mirrorWidth + 24)}px`;
  }
}
