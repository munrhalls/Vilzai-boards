import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  @Output() guestSession = new EventEmitter();
  isAuthUI: boolean = false;

  handleGuestSession() {
    this.guestSession.emit();
  }
}
