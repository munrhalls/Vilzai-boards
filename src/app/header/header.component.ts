import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BoardSelectHook } from '../board.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() boardSelectHooks = [] as BoardSelectHook[] | null;
  @Input() username = '';
  @Output() boardSelected = new EventEmitter<number>();
  @Output() loggedOut = new EventEmitter();

  onBoardSelected(index: number) {
    this.boardSelected.emit(index);
  }
  handleLoggedOut() {
    this.loggedOut.emit();
  }
}
