import { Board } from './board.model';

export const guestData: Board[] = [
  {
    id: Math.random() * Math.random(),
    title: 'Board A',
    columns: [
      {
        title: 'Column One',
        tasks: [
          {
            text: 'Task number #1',
            color: 'silver',
            alottedTime: 10,
          },
          {
            text: 'Mow lawn',
            color: 'green',
            alottedTime: 10,
          },
          {
            text: 'Paint canvas',
            color: 'darkblue',
            alottedTime: 30,
          },
          {
            text: 'Add effects',
            color: 'silver',
            alottedTime: 5,
          },
        ],
      },
      {
        title: 'Column One',
        tasks: [
          {
            text: 'Task number #1',
            color: 'silver',
            alottedTime: 10,
          },
          {
            text: 'Mow lawn',
            color: 'green',
            alottedTime: 10,
          },
          {
            text: 'Paint canvas',
            color: 'd`arkblue',
            alottedTime: 30,
          },
          {
            text: 'Add effects',
            color: 'silver',
            alottedTime: 5,
          },
        ],
      },
      {
        title: 'Column Two',
        tasks: [
          {
            text: 'Task number #1',
            color: 'silver',
            alottedTime: 10,
          },
          {
            text: 'Mow lawn',
            color: 'green',
            alottedTime: 10,
          },
          {
            text: 'Paint canvas',
            color: 'darkblue',
            alottedTime: 30,
          },
          {
            text: 'Add effects',
            color: 'silver',
            alottedTime: 5,
          },
        ],
      },
    ],
  },
  {
    id: Math.random() * Math.random(),
    title: 'Board B',
    columns: [
      {
        title: 'Column One',
        tasks: [
          {
            text: 'Mow lawn',
            color: 'green',
            alottedTime: 10,
          },
          {
            text: 'Paint canvas',
            color: 'darkblue',
            alottedTime: 30,
          },
          {
            text: 'Add effects',
            color: 'silver',
            alottedTime: 5,
          },
        ],
      },
    ],
  },
  {
    id: Math.random() * Math.random(),
    title: 'Board C',
    columns: [
      {
        title: 'Column Three',
        tasks: [
          {
            text: 'Task number #1',
            color: 'silver',
            alottedTime: 10,
          },
        ],
      },
    ],
  },
];
