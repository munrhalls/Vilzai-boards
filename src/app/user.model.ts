import { Board } from './board.model';

export class User {
  constructor(
    public guest: boolean,
    readonly username: string,
    public isLoggedIn: boolean,
    public boards: Board[]
  ) {}
}
