import { Component, Input } from '@angular/core';
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
  taskColorPairs: TaskColorPair[] = TaskColorPairs;
  newTaskColor: TaskColorPair = this.taskColorPairs[0];

  setNewTaskColor(color: TaskColorPair) {
    this.newTaskColor = color;
  }
  onNewTaskAdded() {
    console.log(
      new Task(
        'Click to edit task..',
        this.newTaskColor.bg,
        this.newTaskColor.text,
        null
      )
    );
    this.col.tasks.unshift(
      new Task(
        'New task...',
        this.newTaskColor.bg,
        this.newTaskColor.text,
        null
      )
    );
  }
  selectTask() {
    console.log('select');
  }
}
