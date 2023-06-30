import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css'],
})
export class UserMenuComponent {
  @Input() username = '';
  @Output() loggedOut = new EventEmitter();

  handleLoggedOut() {
    this.loggedOut.emit();
  }
}
