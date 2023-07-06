import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Board, Task, TaskColorPair, TaskColorPairs } from '../board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  @Input() board = {} as Board | null;
  @Output() boardEditModeSet = new EventEmitter<number>();
  @Output() boardDeleted = new EventEmitter<number>();
  boardDeletedPrompt: boolean = false;
  draggedTask: { fromColIndex: number; task: Task } | null = null;

  onTaskDragStart(moved: Task, fromColIndex: number) {
    console.log(moved);
    console.log(fromColIndex);
    this.draggedTask = {
      fromColIndex: fromColIndex,
      task: moved,
    };
  }
  onTaskDrop(taskDroppedAtIndex: number, colDroppedAtIndex: number) {
    console.log(taskDroppedAtIndex, colDroppedAtIndex);
    const columnFrom = this.board!.columns[this.draggedTask!.fromColIndex];
    columnFrom.tasks.splice(
      columnFrom.tasks.indexOf(this.draggedTask!.task),
      1
    );

    const columnTo = this.board!.columns[colDroppedAtIndex];
    columnTo.tasks.splice(taskDroppedAtIndex, 0, this.draggedTask!.task);
    console.log(columnTo.tasks);
    this.draggedTask = null;
  }
  onBoardEditModeSet() {
    this.boardEditModeSet.emit();
  }
  onBoardDeletedPrompt() {
    this.boardDeletedPrompt = true;
  }
  handleBoardDeleted() {
    this.boardDeleted.emit(this.board!.id);
    this.boardDeletedPrompt = false;
  }
}
