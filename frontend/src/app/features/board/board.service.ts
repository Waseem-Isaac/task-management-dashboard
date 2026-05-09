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

  private _activeBoard = signal<Board | null>(this._loadActiveBoard());
  readonly activeBoard = this._activeBoard.asReadonly();

  setActiveBoard(board: Board | null): void {
    this._activeBoard.set(board);
    if (board) {
      localStorage.setItem('active_board', JSON.stringify(board));
    } else {
      localStorage.removeItem('active_board');
    }
  }

  private _loadActiveBoard(): Board | null {
    try {
      const raw = localStorage.getItem('active_board');
      return raw ? (JSON.parse(raw) as Board) : null;
    } catch {
      return null;
    }
  }

  reset(): void {
    this._boards.set([]);
    this._activeBoard.set(null);
    this._loaded = false;
    this.isLoading.set(true);
    localStorage.removeItem('active_board');
  }


  /** 
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
        const saved = this._loadActiveBoard();
        const active = data.boards.find((b) => b._id === saved?._id) ?? data.boards[0] ?? null;
        if (active?._id !== this._activeBoard()?._id) this.setActiveBoard(active);
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
        this._boards.update((boards) => [...(boards ?? []), created]);
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
          localStorage.setItem('active_board', JSON.stringify(updated));
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

  // a function to indicate whether the board has been created by the current user
  isBoardCreatedByCurrentUser(board: Board | null): boolean {
    if (!board || !board.createdBy) return false;
    const currentUser = JSON.parse(localStorage.getItem('auth_user') || '{}');
    
    return board.createdBy === currentUser._id;
  }
}
