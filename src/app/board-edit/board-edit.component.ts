import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Board, Column, Task } from 'src/app/board.model';

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
  dragged: any;
  dragEnterEl: any;

  // DRAG & DROP
  onDragStart(event: any, col: Column) {
    event.dataTransfer.setData('text', this.board!.columns.indexOf(col));
    this.dragged = event.target;
    for (let i = 0; i < 5; i++) {
      if ([...this.dragged.classList].includes('column')) break;
      this.dragged = this.dragged.parentNode;
    }
    this.dragged.classList.add('column-dragged');
  }
  onDragEnter(event: any) {
    event.preventDefault();
  }
  onDragOver(event: any) {
    event.preventDefault();
  }
  onDragLeave(event: any) {}
  onDrop(event: any, col: Column) {
    event.preventDefault();
    const movedIndex = parseInt(event.dataTransfer.getData('text'));
    const moved = this.board!.columns[movedIndex];
    this.board!.columns.splice(movedIndex, 1);
    let dropLocationIndex = this.board!.columns.indexOf(col);
    if (movedIndex === dropLocationIndex) dropLocationIndex++;
    this.board!.columns.splice(dropLocationIndex, 0, moved);
  }
  onDragEnd(event: any) {
    event.preventDefault();
    this.dragged.classList.remove('column-dragged');
  }

  addColumnAtIndex(i: number) {
    this.board!.columns.splice(
      i,
      0,
      new Column('New column title...', [
        new Task('Example new task 1..', 'silver', '#fff', false, null),
        new Task('Example new task 2..', 'green', '#fff', false, null),
        new Task('Example new task 3..', 'blue', '#fff', false, null),
      ])
    );
  }
  deleteColumnAtIndex(i: number) {
    this.board!.columns.splice(i, 1);
  }
  handleBoardDisplayModeSet() {
    this.boardDisplayModeSet.emit();
  }
  handleBoardUpdated() {
    this.boardUpdated.emit(this.board!);
    console.log('boardUpdated');
  }
}
