import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  @Output() guestRegistered = new EventEmitter();

  handleGuestRegistered() {
    this.guestRegistered.emit();
  }
}
