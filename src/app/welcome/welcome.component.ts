import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  @Output() guestRegistered = new EventEmitter();
  @Output() guestLoggedIn = new EventEmitter();

  isEnterGuestLogin: boolean = false;
  isRegisterGuestName: boolean = false;
  guestName: string = '';

  handleGuestRegistered() {
    this.guestRegistered.emit(this.guestName);
  }
  handleGuestLoggedIn() {
    this.guestLoggedIn.emit(this.guestName);
  }
}
