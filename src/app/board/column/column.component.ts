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
    console.log('start');
    this.dragStart.emit(task);
    // // this.col.tasks.splice(this.col.tasks.indexOf(task), 1);
    // let el = event.target;
    // for (let i = 0; i < 5; i++) {
    //   if ([...el.classList].includes('task-row')) {
    //     break;
    //   }
    //   el = el.parentNode;
    // }
    // el.classList.add('task-dragged');
    // event.preventDefault();
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
    const dragged = event.dataTransfer.getData('text');
    console.log('drop', dragged);
    // is it task obj?
    col.tasks.unshift(dragged);
    let el = event.target;
    for (let i = 0; i < 5; i++) {
      if ([...el.classList].includes('task-row')) {
        break;
      }
      el = el.parentNode;
    }
    el.classList.remove('task-dragged');

    // const movedIndex = parseInt(event.dataTransfer.getData('text'));
    // const moved = this.board!.columns[movedIndex];
    // this.board!.columns.splice(movedIndex, 1);
    // let dropLocationIndex = this.board!.columns.indexOf(col);
    // if (movedIndex === dropLocationIndex) dropLocationIndex++;
    // this.board!.columns.splice(dropLocationIndex, 0, moved);
  }
  onDragEnd(event: any) {
    event.preventDefault();
    // this.dragged.classList.remove('column-dragged');
  }
}
