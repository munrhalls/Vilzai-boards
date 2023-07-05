export class Task {
  constructor(
    public text: string,
    public color: string,
    public alottedTime: null | number
  ) {}
}

export class Column {
  constructor(public title: string, public tasks: Task[]) {}
}

export class Board {
  constructor(
    readonly id: number,
    public title: string,
    public columns: Column[]
  ) {}
}

export class BoardSelectHook {
  constructor(readonly index: number, public title: string) {}
}
