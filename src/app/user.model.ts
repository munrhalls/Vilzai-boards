import { Board } from './board.model';

export class User {
  constructor(
    readonly username: string,
    public activeBoard: null | Board,
    public boards: Board[]
  ) {}
}
