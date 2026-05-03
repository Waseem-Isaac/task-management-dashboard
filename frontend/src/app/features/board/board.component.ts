/**
 * Board shell — renders the board header and delegates task management to BoardTasksComponent.
 * SMART component (manages board-level state: active board selection)
 */
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
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
  ],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent implements OnInit{
  boardsService = inject(BoardService);
  private dialog = inject(MatDialog);

  activeBoard = this.boardsService.activeBoard;
  boards = this.boardsService.boards;
  isLoading = this.boardsService.isLoading;

  ngOnInit(): void {
    this.boardsService.loadBoards().subscribe();
  }

  onBoardChange(boardId: string): void {
    const board = this.boards().find((b) => b._id === boardId);
    if (board) this.boardsService.setActiveBoard(board);
  }

  openAddBoardDialog(): void {
    this.dialog.open(BoardAddComponent, { panelClass: 'app-dialog', disableClose: true });
  }

  updateBoardName(boardId: string | undefined, newName: string): void {
    if (!boardId) return;
    if (newName.trim() === this.activeBoard()?.name) return;
    this.boardsService.updateBoard(boardId, { name: newName.trim() }).subscribe({
      error: (error) => console.error('Error updating board name:', error),
    });
  }
}
