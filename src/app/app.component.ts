import { Component } from '@angular/core';
import { Board } from './board.model';
import { User } from './user.model';
import { usersData } from './users.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kanboard';
  activeUser: User = usersData[0];
}
