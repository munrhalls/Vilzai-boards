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
            text: 'You can CREATE a new board by clicking "BOARD" in the top header section',
            bg: 'blue',
            color: '#fff',
            done: false,
            alottedTime: 10,
          },
          {
            text: 'You can also SELECT an existing board by clicking "BOARD" dropdown in the top header section',
            bg: 'green',
            color: '#fff',
            done: false,
            alottedTime: 10,
          },
          {
            text: 'You can EDIT the board, by clicking "MENU" button that is to the right of the board title',
            bg: 'orange',
            color: '#fff',
            done: false,
            alottedTime: 30,
          },
          {
            text: 'DELETE a board by also using the "MENU" button to the right of the board title',
            bg: 'red',
            color: '#fff',
            done: false,
            alottedTime: 5,
          },
          {
            text: 'Read intro about boards',
            bg: 'blue',
            color: '#fff',
            done: true,
            alottedTime: 5,
          },
        ],
      },
      {
        title: 'This app gives you columns.....',
        tasks: [
          {
            text: 'You can easily re-order and move around columns using DRAG & DROP',
            bg: 'orange',
            color: '#fff',
            done: false,
            alottedTime: 10,
          },
          {
            text: 'To use drag & drop on columns, click edit in the "MENU" dropdown to the right of the board title and press "EDIT"',
            bg: 'green',
            color: '#fff',
            done: false,
            alottedTime: 10,
          },
          {
            text: 'This triggers editing mode, which happens to be extremely simple and handy ',
            bg: 'yellow',
            color: '#fff',
            done: false,
            alottedTime: 30,
          },
          {
            text: 'When you drag and then drop a given column on top of another column, it re-orders the dropped column to that position',
            bg: 'blue',
            color: '#fff',
            done: false,
            alottedTime: 5,
          },
          {
            text: 'You can add / delete a column (along with its tasks) with buttons to the right of each column in edit mode',
            bg: 'silver',
            color: '#fff',
            done: false,
            alottedTime: 5,
          },
          {
            text: 'So simple!',
            bg: 'blue',
            color: '#fff',
            done: false,
            alottedTime: 5,
          },
        ],
      },
      {
        title: 'This app only takes your tasks...',
        tasks: [
          {
            text: 'Add, mark as done or delete tasks, using the menu buttons at the top of a column',
            bg: 'gray',
            color: '#fff',
            done: false,
            alottedTime: 10,
          },
          {
            text: 'Use DRAG & DROP to change order of tasks',
            bg: 'blue',
            color: '#fff',
            done: false,
            alottedTime: 10,
          },
          {
            text: 'To edit text of a task, click the task and use the pop-up menu',
            bg: 'gray',
            color: '#fff',
            done: false,
            alottedTime: 10,
          },
          {
            text: 'To edit color of a task, click the task and use the pop-up menu',
            bg: 'orange',
            color: '#fff',
            done: false,
            alottedTime: 30,
          },
        ],
      },
      {
        title: 'Enjoy using simple, no-nonsense task boards',
        tasks: [
          {
            text: 'Feel free to delete this welcome board using "MENU" dropdown to the right of board title and make your own',
            bg: 'red',
            color: '#fff',
            done: false,
            alottedTime: 10,
          },
          {
            text: 'You can easily line up similar tasks in a column',
            bg: 'blue',
            color: '#fff',
            done: false,
            alottedTime: 10,
          },
          {
            text: 'You can just as easily make many of such columns, all held together in one board',
            bg: 'green',
            color: '#fff',
            done: false,
            alottedTime: 10,
          },
          {
            text: 'On top of that, you can simply drag & drop these columns around to order them as you please',
            bg: 'lightblue',
            color: '#fff',
            done: false,
            alottedTime: 10,
          },
          {
            text: 'It works for tasks, too, simply drag & drop to order them..',
            bg: 'yellow',
            color: '#fff',
            done: false,
            alottedTime: 10,
          },
          {
            text: 'You can easily select a board and add / edit / delete any columns or tasks in it',
            bg: 'purple',
            color: '#fff',
            done: false,
            alottedTime: 10,
          },

          {
            text: 'Glad to have you onboard, enjoy Vilzai boards!',
            bg: 'violet',
            color: '#fff',
            done: false,
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
            bg: 'green',
            color: '#fff',
            done: false,
            alottedTime: 10,
          },
          {
            text: 'Get all physical books and all articles in one place',
            bg: 'darkblue',
            color: '#fff',
            done: false,
            alottedTime: 30,
          },
        ],
      },
      {
        title: 'Get started',
        tasks: [
          {
            text: 'Brainstorm a staircase of ideas, where each one is a step towards the next idea',
            bg: 'silver',
            color: '#fff',
            done: false,
            alottedTime: 30,
          },
          {
            text: 'Write initial chapter titles',
            bg: 'silver',
            color: '#fff',
            done: false,
            alottedTime: 30,
          },
          {
            text: 'Write core idea per chapter title and expand on it just enough to know what it is about',
            bg: 'orange',
            color: '#fff',
            done: false,
            alottedTime: 60,
          },
          {
            text: 'Go over the logical, consequential flow of all chapters, see that it all holds up as single, consistent line',
            bg: 'darkblue',
            color: '#fff',
            done: false,
            alottedTime: 60,
          },
          {
            text: 'Go over it all and note all the biggest time-sinks and time-saves that are likely',
            bg: 'darkblue',
            color: '#fff',
            done: false,
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
            bg: 'blue',
            color: '#fff',
            done: false,
            alottedTime: 30,
          },
          {
            text: 'Brainstorm all the TYPES of menial things that need to be done, make notes about types',
            bg: 'orange',
            color: '#fff',
            done: false,
            alottedTime: 30,
          },
          {
            text: 'Note down all the types of menial things',
            bg: 'orange',
            color: '#fff',
            done: false,
            alottedTime: 30,
          },
          {
            text: 'Make sure it is really every type, nothing missing',
            bg: 'orange',
            color: '#fff',
            done: false,
            alottedTime: 30,
          },
          {
            text: 'Make sure no type is extra, nothing unnecessary',
            bg: 'orange',
            color: '#fff',
            done: false,
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
            bg: 'blue',
            color: '#fff',
            done: false,
            alottedTime: 30,
          },
          {
            text: 'WC',
            bg: 'blue',
            color: '#fff',
            done: false,
            alottedTime: 30,
          },
          {
            text: 'Living room',
            bg: 'blue',
            color: '#fff',
            done: false,
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
            bg: 'red',
            color: '#fff',
            done: false,
            alottedTime: 30,
          },
          {
            text: 'What types of menial tasks are completely redundant?',
            bg: 'orange',
            color: '#fff',
            done: false,
            alottedTime: 30,
          },
          {
            text: 'What types of menial tasks are vitally unskippable and missing?',
            bg: 'orange',
            color: '#fff',
            done: false,
            alottedTime: 30,
          },
        ],
      },
    ],
  },
];
