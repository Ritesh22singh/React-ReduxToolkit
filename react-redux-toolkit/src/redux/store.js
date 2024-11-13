import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// This code sets up a Redux store with a single state slice (counter) that is managed by counterReducer. The store is then exported so that it can be used across the app, providing a centralized place for managing and updating the counter's value based on dispatched actions.
