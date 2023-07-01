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
    this.initializeBoards();
  }
  onGuestSession() {
    const activeGuest = localStorage.setItem(
      'guest',
      JSON.stringify(guestData)
    );
    this.activeUser = new User('guest', guestData);
  }
  initializeBoards() {
    if (this.activeUser) {
      this.selectedBoard = this.activeUser.boards[0];
      this.boardSelectHooks = this.activeUser.boards.map((board) => {
        return {
          id: board.id,
          title: board.title,
        };
      });
    }
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
  onLoggedOut() {}
}
