import { configureStore, createSlice } from '@reduxjs/toolkit';

// The initial state of our store when the app loads

const defaultTasks = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

const TaskBoxData = {
  task: defaultTasks,
  status: 'idle',
  error: null,
};

const TasksSlice = createSlice({
  name: 'taskbox',
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.task.findIndex((task) => task.id === id);
      if (task >= 0) {
        DataTransfer.task[task].state = newTaskState;
      }
    },
  },
});

// The actions contained in the slice are exported for usage in our components
export const { updateTaskState } = TasksSlice.actions;

const store = configureStore({
    reducer: {
      taskbox: TasksSlice.reducer,
    },
});

export default store;