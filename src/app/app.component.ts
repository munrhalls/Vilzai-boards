import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { Board, BoardSelectHook } from './board.model';
import { guestData } from './users.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'VILZAI BOARDS';
  activeUser: null | User = null;
  guestUsername: null | string = null;
  selectedBoard: null | Board = null;
  boardSelectHooks: null | BoardSelectHook[] = null;

  onBoardSelected(id: number) {
    console.log(id);
    if (this.activeUser !== null) {
      const selectedBoard = this.activeUser.boards.find(
        (board) => board.id === id
      );
      if (selectedBoard !== undefined) {
        this.selectedBoard = selectedBoard;
      }
    }
  }
  checkAuth() {
    return null;
  }
  onGuestRegistered(username: string) {
    this.activeUser = new User(true, username, guestData);
    localStorage.setItem('guest-user', JSON.stringify(this.activeUser));
    console.log(localStorage.getItem('guest-user'));
    this.selectedBoard = this.activeUser.boards[0];
    this.boardSelectHooks = this.activeUser.boards.map((board) => {
      return {
        id: board.id,
        title: board.title,
      };
    });
  }
  ngOnInit(): void {
    const activeUser = this.checkAuth();
    if (activeUser === null) {
      const activeUser = localStorage.getItem('guest-user');

      if (activeUser) {
        this.activeUser = JSON.parse(activeUser);
      }
    }
  }
}
