import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BoardSelectHook } from '../board.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() boardSelectHooks = [] as BoardSelectHook[];
  @Output() boardSelected = new EventEmitter<number>();

  onBoardSelected(id: number) {
    this.boardSelected.emit(id);
  }
}
