import { User } from './user.model';
import { Board } from './board.model';

export const guestData: Board[] = [
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
          {
            text: 'Mow lawn',
            color: 'green',
            orderNum: 0,
            alottedTime: 10,
          },
          {
            text: 'Paint canvas',
            color: 'darkblue',
            orderNum: 0,
            alottedTime: 30,
          },
          {
            text: 'Add effects',
            color: 'silver',
            orderNum: 0,
            alottedTime: 5,
          },
        ],
      },
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
          {
            text: 'Mow lawn',
            color: 'green',
            orderNum: 0,
            alottedTime: 10,
          },
          {
            text: 'Paint canvas',
            color: 'd`arkblue',
            orderNum: 0,
            alottedTime: 30,
          },
          {
            text: 'Add effects',
            color: 'silver',
            orderNum: 0,
            alottedTime: 5,
          },
        ],
      },
      {
        title: 'Column Two',
        orderNum: 0,
        tasks: [
          {
            text: 'Task number #1',
            color: 'silver',
            orderNum: 0,
            alottedTime: 10,
          },
          {
            text: 'Mow lawn',
            color: 'green',
            orderNum: 0,
            alottedTime: 10,
          },
          {
            text: 'Paint canvas',
            color: 'darkblue',
            orderNum: 0,
            alottedTime: 30,
          },
          {
            text: 'Add effects',
            color: 'silver',
            orderNum: 0,
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
        orderNum: 0,
        tasks: [
          {
            text: 'Mow lawn',
            color: 'green',
            orderNum: 0,
            alottedTime: 10,
          },
          {
            text: 'Paint canvas',
            color: 'darkblue',
            orderNum: 0,
            alottedTime: 30,
          },
          {
            text: 'Add effects',
            color: 'silver',
            orderNum: 0,
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
];

// export const usersData: User[] = [
//   new User(true, 'Guest User', [
//     {
//       id: Math.random() * Math.random(),
//       title: 'Board A',
//       columns: [
//         {
//           title: 'Column One',
//           orderNum: 0,
//           tasks: [
//             {
//               text: 'Task number #1',
//               color: 'silver',
//               orderNum: 0,
//               alottedTime: 10,
//             },
//             {
//               text: 'Mow lawn',
//               color: 'green',
//               orderNum: 0,
//               alottedTime: 10,
//             },
//             {
//               text: 'Paint canvas',
//               color: 'darkblue',
//               orderNum: 0,
//               alottedTime: 30,
//             },
//             {
//               text: 'Add effects',
//               color: 'silver',
//               orderNum: 0,
//               alottedTime: 5,
//             },
//           ],
//         },
//         {
//           title: 'Column One',
//           orderNum: 0,
//           tasks: [
//             {
//               text: 'Task number #1',
//               color: 'silver',
//               orderNum: 0,
//               alottedTime: 10,
//             },
//             {
//               text: 'Mow lawn',
//               color: 'green',
//               orderNum: 0,
//               alottedTime: 10,
//             },
//             {
//               text: 'Paint canvas',
//               color: 'd`arkblue',
//               orderNum: 0,
//               alottedTime: 30,
//             },
//             {
//               text: 'Add effects',
//               color: 'silver',
//               orderNum: 0,
//               alottedTime: 5,
//             },
//           ],
//         },
//         {
//           title: 'Column Two',
//           orderNum: 0,
//           tasks: [
//             {
//               text: 'Task number #1',
//               color: 'silver',
//               orderNum: 0,
//               alottedTime: 10,
//             },
//             {
//               text: 'Mow lawn',
//               color: 'green',
//               orderNum: 0,
//               alottedTime: 10,
//             },
//             {
//               text: 'Paint canvas',
//               color: 'darkblue',
//               orderNum: 0,
//               alottedTime: 30,
//             },
//             {
//               text: 'Add effects',
//               color: 'silver',
//               orderNum: 0,
//               alottedTime: 5,
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: Math.random() * Math.random(),
//       title: 'Board B',
//       columns: [
//         {
//           title: 'Column One',
//           orderNum: 0,
//           tasks: [
//             {
//               text: 'Mow lawn',
//               color: 'green',
//               orderNum: 0,
//               alottedTime: 10,
//             },
//             {
//               text: 'Paint canvas',
//               color: 'darkblue',
//               orderNum: 0,
//               alottedTime: 30,
//             },
//             {
//               text: 'Add effects',
//               color: 'silver',
//               orderNum: 0,
//               alottedTime: 5,
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: Math.random() * Math.random(),
//       title: 'Board C',
//       columns: [
//         {
//           title: 'Column Three',
//           orderNum: 0,
//           tasks: [
//             {
//               text: 'Task number #1',
//               color: 'silver',
//               orderNum: 0,
//               alottedTime: 10,
//             },
//           ],
//         },
//       ],
//     },
//   ]),
// ];
