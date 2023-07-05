import { Component, Input } from '@angular/core';
import { Column, TaskColorPair, TaskColorPairs } from 'src/app/board.model';

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
}
