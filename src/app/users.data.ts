import { User } from './user.model';

export const usersData: User[] = [
  new User('Test user', [
    {
      id: Math.random() * Math.random(),
      title: 'Board A',
      columns: [
        {
          title: 'Column One',
          orderNum: 0,
          tasks: [
            {
              text: 'Task number #1',
              color: 'silver',
              orderNum: 0,
              alottedTime: 10,
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
          orderNum: 0,
          tasks: [
            {
              text: 'Task number #1',
              color: 'silver',
              orderNum: 0,
              alottedTime: 10,
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
          title: 'Column One',
          orderNum: 0,
          tasks: [
            {
              text: 'Task number #1',
              color: 'silver',
              orderNum: 0,
              alottedTime: 10,
            },
          ],
        },
      ],
    },
  ]),
];
