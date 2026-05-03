import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BoardService } from '../../board.service';

@Component({
  selector: 'app-board-add',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './board-add.component.html',
  styleUrls: ['./board-add.component.scss'],
})
export class BoardAddComponent {
  private boardService = inject(BoardService);
  private dialogRef = inject(MatDialogRef<BoardAddComponent>);

  boardName = '';

  submit(): void {
    const name = this.boardName.trim();
    if (!name) return;
    this.boardService.createBoard(name).subscribe(() => this.dialogRef.close());
  }
}
