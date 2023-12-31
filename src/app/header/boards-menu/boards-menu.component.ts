import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BoardSelectHook } from '../../board.model';

@Component({
  selector: 'app-boards-menu',
  templateUrl: './boards-menu.component.html',
  styleUrls: ['./boards-menu.component.css'],
})
export class BoardsMenuComponent {
  @Input() boardSelectHooks = [] as BoardSelectHook[] | null;
  @Output() boardSelected = new EventEmitter<number>();
  @Output() boardAddedPrompt = new EventEmitter();

  addBoard() {
    this.boardAddedPrompt.emit();
  }
  handleBoardSelected(index: number) {
    this.boardSelected.emit(index);
  }
}
