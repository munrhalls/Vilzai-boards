export class Task {
  constructor(
    public text: string,
    public color: string,
    public orderNum: number,
    public alottedTime: null | number
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
  constructor(
    readonly id: number,
    public title: string,
    public columns: Column[]
  ) {}
}

export class BoardSelectHook {
  constructor(readonly id: number, public title: string) {}
}
