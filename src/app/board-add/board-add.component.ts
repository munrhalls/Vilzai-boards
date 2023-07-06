import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Board, Column, Task } from 'src/app/board.model';

@Component({
  selector: 'app-board-add',
  templateUrl: './board-add.component.html',
  styleUrls: ['./board-add.component.css'],
})
export class BoardAddComponent implements OnInit {
  step: number = 1;
  id: number = Math.random() * Math.random();
  title: string = 'Board name...';
  columnsNum: number = 5;
  columnTitles: string[] = [
    'Column 1 title...',
    'Column 2 title...',
    'Column 3 title...',
    'Column 4 title...',
    'Column 5 title...',
  ];
  @Output() boardAdded = new EventEmitter<Board>();
  updateColumnTitle(event: Event, i: number) {
    this.columnTitles[i] = (<HTMLInputElement>event.target).value;
  }
  updateColumns(event: Event) {
    this.columnsNum = Number((<HTMLInputElement>event.target).value);
    this.columnTitles = this.columnTitles.slice(0, this.columnsNum);
    if (this.columnsNum > 16) return;
    for (let i = this.columnTitles.length + 1; i < this.columnsNum + 1; i++) {
      this.columnTitles.push('Column ' + i + ' title...');
    }
  }
  addBoard() {
    this.boardAdded.emit({
      id: Math.random() * Math.random(),
      title: this.title,
      columns: this.columnTitles.map(
        (colTitle, index) =>
          new Column(colTitle, [
            new Task('New task 1...', 'silver', '#000', null),
            new Task('New task 2...', 'green', '#000', null),
            new Task('New task 3...', 'blue', '#000', null),
          ])
      ),
    });
    console.log('added');
  }
  ngOnInit() {
    this.step = 1;
  }
}
