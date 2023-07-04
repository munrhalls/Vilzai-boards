import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board-header',
  templateUrl: './board-header.component.html',
  styleUrls: ['./board-header.component.css'],
})
export class BoardHeaderComponent {
  @Input() title = '' as string;
  @Output() boardDeletedPrompt = new EventEmitter();

  onBoardDeletedPrompt() {
    this.boardDeletedPrompt.emit();
  }
}
