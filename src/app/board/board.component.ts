import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Board } from '../board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  @Input() board = {} as Board | null;
  boardDeletedPrompt: boolean = false;
  @Output() boardDeleted = new EventEmitter<number>();

  onBoardDeletedPrompt() {
    this.boardDeletedPrompt = true;
  }
  handleBoardDeleted() {
    this.boardDeleted.emit(this.board!.id);
    this.boardDeletedPrompt = false;
  }
}
