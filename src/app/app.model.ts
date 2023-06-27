export class Task {
  constructor(
    public text: string,
    color: string,
    orderNum: number,
    alottedTime: null | number
  ) {}
}

export class Column {
  constructor(
    public title: string,
    public tasks: Task[],
    public orderNum: number
  ) {}
}

export class Board {
  constructor(public title: string, public columns: Column[]) {}
}
