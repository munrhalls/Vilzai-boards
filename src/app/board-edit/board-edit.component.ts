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
    event.target.style.cursor = 'move';
  }
  onDragOver(event: any, col: Column) {
    event.preventDefault();
    event.target.style.borderTop = '5px solid teal';
  }
  onDragLeave(event: any) {
    event.target.style.borderTop = 'none';
  }
  onDrop(event: any, col: Column) {
    event.preventDefault();
    const movedIndex = parseInt(event.dataTransfer.getData('text'));
    const moved = this.board!.columns[movedIndex];
    this.board!.columns.splice(movedIndex, 1);
    let dropLocationIndex = this.board!.columns.indexOf(col);
    if (movedIndex === dropLocationIndex) dropLocationIndex++;
    this.board!.columns.splice(dropLocationIndex, 0, moved);
    event.target.style.cursor = 'auto';
    event.target.style.borderTop = 'none';
  }
  handleBoardDisplayModeSet() {
    this.boardDisplayModeSet.emit();
  }
  handleBoardUpdated() {
    this.boardUpdated.emit(this.board!);
    console.log('boardUpdated');
  }
}
