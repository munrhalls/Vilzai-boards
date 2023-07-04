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
    event.dataTransfer.setData('text', col.orderNum);
  }
  onDragOver(event: any, col: Column) {
    event.preventDefault();
  }
  onDrop(event: any, col: Column) {
    event.preventDefault();
    const dropStart = event.dataTransfer.getData('text');
    console.log(this.board!.columns.map((col) => col.orderNum));
    console.log('drop start:', dropStart);
    console.log('drop place:', col.orderNum);
  }
  handleBoardDisplayModeSet() {
    this.boardDisplayModeSet.emit();
  }
  handleBoardUpdated() {
    this.boardUpdated.emit(this.board!);
    console.log('boardUpdated');
  }
}
