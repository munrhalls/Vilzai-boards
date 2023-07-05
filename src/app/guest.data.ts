import { Board } from './board.model';

export const guestData: Board[] = [
  {
    id: Math.random() * Math.random(),
    title: 'Example welcome board',
    columns: [
      {
        title: 'This app gives you boards..',
        tasks: [
          {
            text: 'You can create a new board by clicking "BOARD" in the top header section',
            color: 'blue',
            alottedTime: 10,
          },
          {
            text: 'You can also select an existing board by clicking "BOARD" in the top header section',
            color: 'green',
            alottedTime: 10,
          },
          {
            text: 'You can edit the board, by clicking "MENU" button that is to the right of the board title',
            color: 'orange',
            alottedTime: 30,
          },
          {
            text: 'Delete a board by also using the "MENU" button to the right of the board title',
            color: 'red',
            alottedTime: 5,
          },
        ],
      },
      {
        title: 'This app gives you columns.....',
        tasks: [
          {
            text: 'You can easily re-order and move around columns using drag & drop',
            color: 'orange',
            alottedTime: 10,
          },
          {
            text: 'To use drag & drop on columns, click edit in the "MENU" to the right of the board title',
            color: 'green',
            alottedTime: 10,
          },
          {
            text: 'This enables editing in an extremely simple, handy way ',
            color: 'yellow',
            alottedTime: 30,
          },
          {
            text: 'When you drag and then drop a given column on top of another column, it re-orders the dropped column to that position',
            color: 'blue',
            alottedTime: 5,
          },
          {
            text: 'You can add / delete a column (along with its tasks) with buttons to the right of each column in edit mode',
            color: 'silver',
            alottedTime: 5,
          },
          {
            text: 'So simple!',
            color: 'blue',
            alottedTime: 5,
          },
        ],
      },
      {
        title: 'This app gives you tasks...',
        tasks: [
          {
            text: 'Add, mark as done or delete tasks, using the menu buttons at the top of a column',
            color: 'silver',
            alottedTime: 10,
          },
          {
            text: 'To edit text of a task, click the task and use the pop-up menu',
            color: 'gray',
            alottedTime: 10,
          },
          {
            text: 'To edit color of a task, click the task and use the pop-up menu',
            color: 'orange',
            alottedTime: 30,
          },
        ],
      },
      {
        title: 'Enjoy using simple, no-nonsense task boards.',
        tasks: [
          {
            text: 'Feel free to delete this welcome board using "MENU" button to the right of board title and make your own',
            color: 'darkorange',
            alottedTime: 10,
          },
          {
            text: 'You can easily line up similar tasks in a column',
            color: 'blue',
            alottedTime: 10,
          },
          {
            text: 'You can just as easily make many of such columns, all held together in one board',
            color: 'green',
            alottedTime: 10,
          },
          {
            text: 'On top of that, you can simply drag & drop these columns around to order them as you please',
            color: 'lightblue',
            alottedTime: 10,
          },
          {
            text: 'It works for tasks, too, simply drag & drop to order them..',
            color: 'yellow',
            alottedTime: 10,
          },
          {
            text: 'You can easily select a board and add / edit / delete any columns or tasks in it',
            color: 'purple',
            alottedTime: 10,
          },

          {
            text: 'Glad to have you onboard, enjoy Vilzai boards!',
            color: 'violet',
            alottedTime: 10,
          },
        ],
      },
    ],
  },
  {
    id: Math.random() * Math.random(),
    title: 'Example board 2: writing dissertation',
    columns: [
      {
        title: 'Prepare all the materials',
        tasks: [
          {
            text: 'Prepare slots for links, source quotations, pdf files.',
            color: 'green',
            alottedTime: 10,
          },
          {
            text: 'Get all physical books and all articles in one place',
            color: 'darkblue',
            alottedTime: 30,
          },
        ],
      },
      {
        title: 'Get started',
        tasks: [
          {
            text: 'Brainstorm a staircase of ideas, where each one is a step towards the next idea',
            color: 'silver',
            alottedTime: 30,
          },
          {
            text: 'Write initial chapter titles',
            color: 'silver',
            alottedTime: 30,
          },
          {
            text: 'Write core idea per chapter title and expand on it just enough to know what it is about',
            color: 'orange',
            alottedTime: 60,
          },
          {
            text: 'Go over the logical, consequential flow of all chapters, see that it all holds up as single, consistent line',
            color: 'darkblue',
            alottedTime: 60,
          },
          {
            text: 'Go over it all and note all the biggest time-sinks and time-saves that are likely',
            color: 'darkblue',
            alottedTime: 60,
          },
        ],
      },
    ],
  },
  {
    id: Math.random() * Math.random(),
    title: 'Example board 3: organize "menial" tasks',
    columns: [
      {
        title:
          'Get a list of categories - any and TYPES of "menial" tasks that, if not done, hinder things.',
        tasks: [
          {
            text: 'Get a board that can be put on the fridge',
            color: 'blue',
            alottedTime: 30,
          },
          {
            text: 'Brainstorm all the TYPES of menial things that need to be done, make notes about types',
            color: 'orange',
            alottedTime: 30,
          },
          {
            text: 'Note down all the types of menial things',
            color: 'orange',
            alottedTime: 30,
          },
          {
            text: 'Make sure it is really every type, nothing missing',
            color: 'orange',
            alottedTime: 30,
          },
          {
            text: 'Make sure no type is extra, nothing unnecessary',
            color: 'orange',
            alottedTime: 30,
          },
        ],
      },
      {
        title:
          'Associate each type with a time and place where you can line up such tasks together',
        tasks: [
          {
            text: 'Kitchen',
            color: 'blue',
            alottedTime: 30,
          },
          {
            text: 'WC',
            color: 'blue',
            alottedTime: 30,
          },
          {
            text: 'Living room',
            color: 'blue',
            alottedTime: 30,
          },
        ],
      },
      {
        title:
          'Look at it as a whole and see how it could be optimized - to be that much less of a hassle',
        tasks: [
          {
            text: 'What types of menial tasks are in wrong order, causing most friction?',
            color: 'red',
            alottedTime: 30,
          },
          {
            text: 'What types of menial tasks are completely redundant?',
            color: 'orange',
            alottedTime: 30,
          },
          {
            text: 'What types of menial tasks are vitally unskippable and missing?',
            color: 'orange',
            alottedTime: 30,
          },
        ],
      },
    ],
  },
];
