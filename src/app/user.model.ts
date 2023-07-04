import { Board } from './board.model';

export class User {
  constructor(
    readonly username: string,
    public activeBoardIndex: null | number,
    public boards: Board[]
  ) {}
}
