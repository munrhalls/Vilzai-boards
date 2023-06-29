import { Component } from '@angular/core';
import { User } from './user.model';
import { BoardSelectHook } from './board.model';
import { usersData } from './users.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kanboard';
  testUser = usersData[0];
  activeUser: User = this.testUser;
  boardSelectHooks: BoardSelectHook[] = this.testUser.boards.map((board) => {
    return {
      id: board.id,
      title: board.title,
    };
  });

  onBoardSelected(id: number) {
    console.log(id);
  }
}
