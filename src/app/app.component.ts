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
  ngOnInit(): void {
    const activeUserStr = localStorage.getItem('activeUser');

    if (activeUserStr) {
      this.activeUser = JSON.parse(activeUserStr);
    } else {
    }
  }
}
