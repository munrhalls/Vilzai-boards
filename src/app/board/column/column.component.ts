import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  Column,
  TaskColorPair,
  TaskColorPairs,
  Task,
} from 'src/app/board.model';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
})
export class ColumnComponent {
  @Input() col = {} as Column;
  @Output() dragStart = new EventEmitter<Task>();
  @Output() dragDrop = new EventEmitter<number>();

  taskColorPairs: TaskColorPair[] = TaskColorPairs;
  newTaskColor: TaskColorPair = this.taskColorPairs[0];
  editTaskIndex: number | null = null;

  setNewTaskColor(color: TaskColorPair) {
    this.newTaskColor = color;
  }
  onNewTaskAdded() {
    console.log(
      new Task(
        'Click to edit task..',
        this.newTaskColor.bg,
        this.newTaskColor.text,
        false,
        null
      )
    );
    this.col.tasks.unshift(
      new Task(
        'New task...',
        this.newTaskColor.bg,
        this.newTaskColor.text,
        false,
        null
      )
    );
  }
  setTaskEdit(column: Column, taskIndex: number) {
    this.editTaskIndex = taskIndex;
  }
  setEditedTaskColor() {}
  deleteTask(taskIndex: number) {
    this.col.tasks.splice(taskIndex, 1);
  }
  // DRAG & DROP
  onDragStart(task: Task) {
    this.dragStart.emit(task);
  }
  onDragEnter(event: any) {
    event.preventDefault();
  }
  onDragOver(event: any) {
    event.preventDefault();
  }
  onDragLeave(event: any) {}
  onDrop(event: any, taskDroppedAtIndex: number) {
    event.preventDefault();
    this.dragDrop.emit(taskDroppedAtIndex);
  }
  onDragEnd(event: any) {
    event.preventDefault();
  }
}
