import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board-menu',
  templateUrl: './board-menu.component.html',
  styleUrls: ['./board-menu.component.css'],
})
export class BoardMenuComponent {
  isConfirmDelete: boolean = false;
  @Output() boardDeletedPrompt = new EventEmitter();
  @Output() boardEditModeSet = new EventEmitter();

  setBoardModeToEdit() {
    this.boardEditModeSet.emit();
  }
  handleBoardDeletedPrompt() {
    this.boardDeletedPrompt.emit();
  }
}
