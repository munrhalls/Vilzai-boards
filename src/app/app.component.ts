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
  title = 'VILZAI BOARDS';
  activeUser: User = usersData[0];
  selectedBoard: Board = this.activeUser.boards[0];
  boardSelectHooks: BoardSelectHook[] = this.activeUser.boards.map((board) => {
    return {
      id: board.id,
      title: board.title,
    };
  });

  onBoardSelected(id: number) {
    console.log(id);
    const selectedBoard = this.activeUser.boards.find(
      (board) => board.id === id
    );
    if (selectedBoard) {
      this.selectedBoard = selectedBoard;
    }
  }
  checkAuth() {
    return null;
  }
  onGuestRegistered() {
    this.activeUser = new User(true, Math.random().toString(), []);
    localStorage.setItem('guest-user', JSON.stringify(this.activeUser));
    console.log(localStorage.getItem('guest-user'));
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
