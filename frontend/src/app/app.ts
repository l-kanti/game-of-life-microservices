import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasGridComponent } from './board/canvas-grid/canvas-grid.component';
import { BoardControlsComponent } from './board/controls/board-controls.component';
import { calculateNextBoardState } from './board/logic/calculate-utils';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CanvasGridComponent, BoardControlsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');

  // Board dimensions
  private readonly ROWS = 30;
  private readonly COLS = 50;

  board: boolean[][] = this.makeEmptyBoard(this.ROWS, this.COLS);

  private timer: any = null;

  private makeEmptyBoard(rows: number, cols: number): boolean[][] {
    return Array.from({ length: rows }, () => Array.from({ length: cols }, () => false));
  }

  onBoardChange(newBoard: boolean[][]) {
    this.board = newBoard;
  }

  start() {
    if (this.timer) return;
    this.timer = setInterval(() => {
      this.board = calculateNextBoardState(this.board);
    }, 500);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  reset() {
    this.stop();
    this.board = this.makeEmptyBoard(this.ROWS, this.COLS);
  }
}
