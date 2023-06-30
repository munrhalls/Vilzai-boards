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
  selectedBoard: null | Board = null;
  boardSelectHooks: null | BoardSelectHook[] = null;

  ngOnInit(): void {
    const activeUser = this.checkAuth();
    if (activeUser !== null) return;
    const username = localStorage.getItem('LOCAL_STORAGE_LOGGED_IN_USERNAME');

    if (!username || username === 'null') return;
    const strGuestLocalStorage = localStorage.getItem(username);

    if (!strGuestLocalStorage) return;
    const guest = JSON.parse(strGuestLocalStorage);
    this.activeUser = new User(username, guest);

    console.log(this.activeUser, '////////////sele');
    this.selectedBoard = this.activeUser.boards[0];
    this.boardSelectHooks = this.activeUser.boards.map((board) => {
      return {
        id: board.id,
        title: board.title,
      };
    });
  }
  checkAuth() {
    return null;
  }
  onBoardSelected(id: number) {
    if (this.activeUser !== null) {
      const selectedBoard = this.activeUser.boards.find(
        (board) => board.id === id
      );

      if (selectedBoard !== undefined) {
        this.selectedBoard = selectedBoard;
      }
    }
  }
  onGuestRegistered(username: string) {
    this.activeUser = new User(username, guestData);
    localStorage.setItem(username, JSON.stringify(this.activeUser.boards));
    localStorage.setItem('LOCAL_STORAGE_LOGGED_IN_USERNAME', username);

    this.selectedBoard = this.activeUser.boards[0];
    this.boardSelectHooks = this.activeUser.boards.map((board) => {
      return {
        id: board.id,
        title: board.title,
      };
    });
  }
  onLoggedOut() {
    if (this.activeUser === null) return;
    const boards = this.activeUser.boards;
    const userData = JSON.stringify({
      username: this.activeUser.username,
      boards: boards,
    });
    localStorage.setItem(this.activeUser.username, userData);
    localStorage.setItem('LOCAL_STORAGE_LOGGED_IN_USERNAME', 'null');
    this.activeUser = null;
  }
}
