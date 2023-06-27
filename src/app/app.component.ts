import { Component } from '@angular/core';
import { Board } from './board.model';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kanboard';
  user = {} as User;
  boards: Board[] = [];
}
