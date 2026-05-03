import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Board } from './models';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private http = inject(HttpClient);
  private _boards = signal<Board[]>([]);
  readonly boards = this._boards.asReadonly();
  readonly isLoading = signal(true);
  private _loaded = false;

  private _activeBoard = signal<Board | null>(null);
  readonly activeBoard = this._activeBoard.asReadonly();
 
  setActiveBoard(board: Board | null): void {
    this._activeBoard.set(board);
  }

  /**
   * 
 GET     /boards                        → all boards
POST    /boards                        → create board
GET     /boards/:boardId               → single board
PUT     /boards/:boardId               → update board
DELETE  /boards/:boardId               → delete board
   */

  // Load boards
  loadBoards(): Observable<Board[]> {
    if (this._loaded) return of(this.boards());
    return this.http.get<{ boards: Board[] }>(`boards`).pipe(
      tap((data) => {
        this._boards.set(data.boards);
        this._activeBoard.set(data.boards[0] ?? null);
        this._loaded = true;
        this.isLoading.set(false);
      }),
      map((data) => data.boards),
    );
  }

  // Get Board by ID
  getBoardById(boardId: string): Observable<Board> {
    return this.http.get<Board>(`boards/${boardId}`).pipe(map((board) => board || undefined));
  }

  // Create Board
  createBoard(name: string): Observable<Board> {
    return this.http.post<Board>(`boards`, { name }).pipe(
      tap((created) => {
        this._boards.update((boards) => [...(boards ?? []) , created]);
        this.setActiveBoard(created);
      }),
    );
  }

  // Update board 
  updateBoard(boardId: string, board: Partial<Board>): Observable<Board> {
    return this.http.put<Board>(`boards/${boardId}`, board).pipe(
      tap((updated) => {
        // Update the board in the in-memory signal store to reflect changes immediately in the UI
        this._boards.update((boards) => boards.map((b) => (b._id === boardId ? updated : b)));
        if (this.activeBoard()?._id === boardId) {
          this._activeBoard.set(updated);
        }
      }),
    );
  }

  // Delete board
  deleteBoard(boardId: string): Observable<void> {
    return this.http.delete<void>(`boards/${boardId}`).pipe(
      tap(() => {
        this._boards.update((boards) => boards.filter((b) => b._id !== boardId));
        if (this.activeBoard()?._id === boardId) {
          this._activeBoard.set(null);
        }
      }),
    );
  }
}
