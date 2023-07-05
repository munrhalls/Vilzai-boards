export class Task {
  constructor(
    public text: string,
    public bg: string,
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

export class TaskColorPair {
  constructor(public title: string, public bg: string, public text: string) {}
}

export const TaskColorPairs = [
  { title: 'gray', bg: '#505050;', text: '#fff' },
  { title: 'darkgray', bg: '#4a4a4a', text: '#fff' },
  { title: 'silver', bg: 'silver', text: '#000' },
  { title: 'blue', bg: '#0101dd', text: '#ccc' },
  { title: 'green', bg: '#008e00', text: '#fff' },
  { title: 'yellow', bg: 'yellow', text: '#000' },
  { title: 'orange', bg: '#fea403', text: '#000' },
  { title: 'red', bg: 'red', text: '#000' },
  { title: 'violet', bg: 'violet', text: '#000' },
  { title: 'purple', bg: 'purple', text: '#fff' },
];
