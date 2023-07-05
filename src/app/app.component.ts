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
  isShowWelcomeAfterLogin: boolean = false;
  boardMode: 'display' | 'edit' | 'add' | 'deleted' = 'display';
  boardSelectHooks: null | BoardSelectHook[] = null;
  guestPeriodicSave: any;

  ngOnInit(): void {
    if (this.activeUser === null) {
      const guest = localStorage.getItem('guest');

      if (guest) {
        this.activeUser = JSON.parse(guest);

        this.guestPeriodicSave = setInterval(() => {
          localStorage.setItem('guest', JSON.stringify(this.activeUser));
        }, 2500);
      } else {
        clearInterval(this.guestPeriodicSave);
      }
    }

    this.setBoardSelectHooks();
  }
  onGuestSession() {
    this.isShowWelcomeAfterLogin = true;

    this.activeUser = new User('guest', 0, guestData);
    this.boardSelectHooks = this.activeUser.boards.map((board, index) => {
      return {
        index: index,
        title: board.title,
      };
    });
    localStorage.setItem('guest', JSON.stringify(this.activeUser));
  }
  onCloseWelcomeAfterLogin() {
    this.isShowWelcomeAfterLogin = false;
  }
  setBoardSelectHooks() {
    if (this.activeUser !== null) {
      this.boardSelectHooks = this.activeUser!.boards.map((board, index) => {
        return {
          index: index,
          title: board.title,
        };
      });
    }
  }
  onBoardSelected(index: number) {
    this.activeUser!.activeBoardIndex = index;
    this.boardMode = 'display';
  }
  onBoardAddedPrompt() {
    this.boardMode = 'add';
  }
  onBoardAdded(newBoard: Board) {
    this.activeUser!.boards.push(newBoard);
    this.activeUser!.activeBoardIndex = this.activeUser!.boards.length - 1;
    this.boardMode = 'display';
    this.setBoardSelectHooks();
  }
  onBoardEditModeSet() {
    this.boardMode = 'edit';
  }
  onBoardDisplayModeSet() {
    this.boardMode = 'display';
  }
  onBoardUpdated(board: Board) {
    this.activeUser!.boards[this.activeUser!.activeBoardIndex!] = board;
    console.log('board updated');
  }
  onBoardDeleted(id: number) {
    this.activeUser!.boards = this.activeUser!.boards.filter(
      (board) => board.id !== id
    );
    this.activeUser!.activeBoardIndex = null;
    this.boardMode = 'deleted';
    this.setBoardSelectHooks();
  }
  getActiveBoard() {
    if (this.activeUser!.activeBoardIndex === null) return null;
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
