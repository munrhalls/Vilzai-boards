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
  guestPeriodicSave: any;

  ngOnInit(): void {
    if (this.activeUser === null) {
      const guest = localStorage.getItem('guest');

      if (guest) {
        this.activeUser = JSON.parse(guest);
        this.guestPeriodicSave = setInterval(() => {
          localStorage.setItem('guest', JSON.stringify(this.activeUser));
          console.log(this.activeUser?.boards.map((board) => board.id));
        }, 2100);
      } else {
        clearInterval(this.guestPeriodicSave);
      }
    }

    if (this.activeUser !== null) {
      this.boardSelectHooks = this.activeUser.boards.map((board, index) => {
        return {
          index: index,
          title: board.title,
        };
      });
    }
  }
  onGuestSession() {
    this.activeUser = new User('guest', 0, guestData);
    this.boardSelectHooks = this.activeUser.boards.map((board, index) => {
      return {
        index: index,
        title: board.title,
      };
    });
    localStorage.setItem('guest', JSON.stringify(this.activeUser));
  }

  onBoardSelected(index: number) {
    this.activeUser!.activeBoardIndex = index;
  }
  getActiveBoard() {
    return this.activeUser!.boards[this.activeUser!.activeBoardIndex];
  }
  onLoggedOut() {
    clearInterval(this.guestPeriodicSave);
    if (this.activeUser!.username === 'guest') {
      localStorage.removeItem('guest');
    }
    this.activeUser = null;
    this.boardSelectHooks = null;
  }
}
