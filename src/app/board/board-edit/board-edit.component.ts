import { Component, Input } from '@angular/core';
import { Board } from 'src/app/board.model';

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.css'],
})
export class BoardEditComponent {
  mode: 'add-step-1' | 'add-step-2' | 'edit' = 'edit';
  @Input() board = {} as Board | null;
}
