import { createStore } from 'redux';

export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK',
};

export const archiveTask = (id) => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = (id) => ({ type: actions.PIN_TASK, id });

const taskStateReducer = (taskState) => (state, action) => {
  return {
    ...state,
    tasks: state.tasks.map((task) => (task.id === action.id ? { ...task, state: taskState } : task)),
  };
};

const type = {
  table: {
    [actions.ARCHIVE_TASK]: (state, action) => taskStateReducer('TASK_ARCHIVED')(state, action),
    [actions.PIN_TASK]: (state, action) => taskStateReducer('TASK_PINNED')(state, action),
  },
  run(state, action) {
    return this.table[action.type]?.(state, action);
  },
};

export const reducer = (state, action) => {
  return type.run(state, action);
};

const defaultTasks = [
  { id: '1', title: 'SomeThing', state: 'TASK_INBOX' },
  { id: '2', title: 'SomeThing more', state: 'TASK_INBOX' },
  { id: '3', title: 'SomeThing else', state: 'TASK_INBOX' },
  { id: '4', title: 'SomeThing again', state: 'TASK_INBOX' },
];

export default createStore(reducer, { tasks: defaultTasks });
