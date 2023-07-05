import { Board } from './board.model';

export const guestData: Board[] = [
  {
    id: Math.random() * Math.random(),
    title: 'Example guest board',
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
        title: 'Column Two',
        tasks: [
          {
            text: 'Task number #1',
            color: 'silver',
            alottedTime: 10,
          },
          {
            text: 'Handle documents',
            color: 'green',
            alottedTime: 10,
          },
          {
            text: 'Drive to office',
            color: 'darkblue',
            alottedTime: 30,
          },
          {
            text: 'Ensure documents are handled properly',
            color: 'silver',
            alottedTime: 5,
          },
        ],
      },
      {
        title: 'Column Three',
        tasks: [
          {
            text: 'Organize desk',
            color: 'silver',
            alottedTime: 10,
          },
          {
            text: 'Get sticky notes and order colors by work type',
            color: 'green',
            alottedTime: 10,
          },
          {
            text: 'Place reminders on the board',
            color: 'darkblue',
            alottedTime: 30,
          },
          {
            text: 'Mark priority levels with orange and yellow sticky notes',
            color: 'silver',
            alottedTime: 5,
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
