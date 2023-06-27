import { Board } from './board.model';

export class User {
  constructor(public username: string, public boards: Board[]) {}
}
