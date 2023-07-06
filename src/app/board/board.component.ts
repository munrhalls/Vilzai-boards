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
  // draggedTask: { colIndex: number; dragged: Task } | null = null;
  // onTaskDragStart - set dragged{moved: task, colMovedFrom: }
  // onTaskDrop - get {droppedOnTaskIndex.., ...droppedAtColIndex..
  // 1. splice out from colMovedFrom using colMovedFrom data -> col and moved index of
  // 2. splice in to columns[droppedAtColIndex], @droppedOnTaskIndex

  onTaskDragStart(moved: Task, fromColIndex: number) {
    console.log(moved);
    console.log(fromColIndex);
    // pass task and colindex here, set it to dragged
  }
  onTaskDrop(droppedAtColIndex: number, droppedOnTaskIndex: number) {
    // get col and splice it in its tasks @index
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
