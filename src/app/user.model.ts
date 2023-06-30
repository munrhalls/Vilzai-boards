import { Board } from './board.model';

export class User {
  constructor(
    public guest: boolean,
    public username: string,
    public boards: Board[]
  ) {}
}
