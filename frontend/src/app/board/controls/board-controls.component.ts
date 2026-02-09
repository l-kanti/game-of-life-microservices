import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'board-controls',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="controls">
      <button (click)="start()">Start</button>
      <button (click)="stop()">Stop</button>
      <button (click)="reset()">Reset</button>
    </div>
  `,
  styles: [
    `:host { display:block; margin-bottom: 0.5rem }`,
    `.controls { display:flex; gap:0.5rem }`,
    `button { padding:0.4rem 0.6rem; border-radius:6px; border:1px solid #ccc; background:#fff }`,
  ],
})
export class BoardControlsComponent {
  @Output() start = new EventEmitter<void>();
  @Output() stop = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();
}
