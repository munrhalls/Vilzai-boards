import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { Board, BoardSelectHook } from './board.model';
import { guestData } from './guest.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'VILZAI BOARDS';
  activeUser: null | User = null;
  boardSelectHooks: null | BoardSelectHook[] = null;
  guestSessionPeriodicSave: any;

  ngOnInit(): void {
    if (this.activeUser === null) {
      const guestSession = localStorage.getItem('guest');
      console.log(guestSession);

      if (guestSession) {
        this.activeUser = JSON.parse(guestSession);
        this.guestSessionPeriodicSave = setInterval(() => {
          localStorage.setItem('guest', JSON.stringify(this.activeUser));
        }, 5000);
      } else {
        clearInterval(this.guestSessionPeriodicSave);
      }
    }

    if (this.activeUser !== null) {
      this.boardSelectHooks = this.activeUser.boards.map((board) => {
        return {
          id: board.id,
          title: board.title,
        };
      });
    }
  }
  onGuestSession() {
    const guest = new User('guest', guestData[0], guestData);
    localStorage.setItem('guest', JSON.stringify(guest));
    this.activeUser = guest;
  }

  onBoardSelected(id: number) {
    if (this.activeUser !== null) {
      const selectedBoard = this.activeUser.boards.find(
        (board) => board.id === id
      );

      if (selectedBoard !== undefined) {
        this.activeUser.activeBoard = selectedBoard;
      }
    }
  }
  onLoggedOut() {
    if (this.activeUser?.username === 'guest') {
      localStorage.removeItem('guest');
    }
    this.activeUser = null;
  }
}
