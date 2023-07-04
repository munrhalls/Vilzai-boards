import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-header-edit',
  templateUrl: './board-header-edit.component.html',
  styleUrls: ['./board-header-edit.component.css'],
})
export class BoardHeaderEditComponent {
  @Input() title = '' as string;
}
