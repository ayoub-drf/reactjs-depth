import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './Features/counter/counterSlice';

export const reduxStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
