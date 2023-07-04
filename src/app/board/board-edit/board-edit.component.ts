import { Component } from '@angular/core';

@Component({
  selector: 'app-board-edit',
  templateUrl: './board-edit.component.html',
  styleUrls: ['./board-edit.component.css'],
})
export class BoardEditComponent {
  mode: 'add-step-1' | 'add-step-2' | 'edit' = 'edit';
}
