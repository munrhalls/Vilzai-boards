import { Component } from '@angular/core';
import { Board, Column } from 'src/app/board.model';

@Component({
  selector: 'app-board-add',
  templateUrl: './board-add.component.html',
  styleUrls: ['./board-add.component.css'],
})
export class BoardAddComponent {
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
}
