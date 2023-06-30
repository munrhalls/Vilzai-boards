import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { Board, BoardSelectHook } from './board.model';
import { usersData } from './users.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'kanboard';
  testUser = usersData[0];
  guestUser: null | User = null;
  activeUser: User = this.testUser;
  selectedBoard: Board = this.testUser.boards[0];
  boardSelectHooks: BoardSelectHook[] = this.testUser.boards.map((board) => {
    return {
      id: board.id,
      title: board.title,
    };
  });
  showWelcome: boolean = true;

  onBoardSelected(id: number) {
    console.log(id);
    const selectedBoard = this.testUser.boards.find((board) => board.id === id);
    if (selectedBoard) {
      this.selectedBoard = selectedBoard;
    }
  }
  checkAuth() {
    return null;
  }
  onGuestRegistered() {
    this.guestUser = new User(Math.random().toString(), []);
    localStorage.setItem('guest-user', JSON.stringify(this.guestUser));
    console.log(localStorage.getItem('guest-user'));
  }
  ngOnInit(): void {
    const activeUser = this.checkAuth();
    if (activeUser === null) {
      const guestUser = localStorage.getItem('guest-user');

      if (guestUser) {
        this.guestUser = JSON.parse(guestUser);
      }
    }
  }
}
