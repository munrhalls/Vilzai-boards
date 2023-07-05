import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Board, Column } from 'src/app/board.model';

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.css'],
})
export class BoardEditComponent {
  @Input() board = {} as Board | null;
  @Output() boardDisplayModeSet = new EventEmitter();
  @Output() boardUpdated = new EventEmitter<Board>();
  taskColors: string[] = ['silver', 'orange', 'teal'];

  onDragStart(event: any, col: Column) {
    event.dataTransfer.setData('text', this.board!.columns.indexOf(col));
  }
  onDragOver(event: any, col: Column) {
    event.preventDefault();
  }
  onDrop(event: any, col: Column) {
    event.preventDefault();
    const movedIndex = parseInt(event.dataTransfer.getData('text'));
    const moved = this.board!.columns[movedIndex];
    this.board!.columns.splice(movedIndex, 1);
    // deleting the dragged el should work on drop
    const dropLocationIndex = this.board!.columns.indexOf(col);
    this.board!.columns.splice(dropLocationIndex, 0, moved);
  }
  handleBoardDisplayModeSet() {
    this.boardDisplayModeSet.emit();
  }
  handleBoardUpdated() {
    this.boardUpdated.emit(this.board!);
    console.log('boardUpdated');
  }
}
