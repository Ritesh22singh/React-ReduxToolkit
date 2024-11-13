import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

export default counterSlice.reducer;

// Flow of the Code
// State Setup:

// The slice’s initial state is defined, starting with value: 0.
// Reducers and Actions:

// createSlice generates reducers for the counter actions: increment, decrement, reset, and incrementByAmount.
// Using Actions in Components:

// The exported actions (increment, decrement, incrementByAmount, reset) can be dispatched in components to update the value in the global Redux store.
// Updating the Store:

// When an action is dispatched, the corresponding reducer modifies the state accordingly. The new state is then accessible in any component that needs it via useSelector.
// Summary
// This code defines a Redux slice called counter, which has an initial state and a set of actions (increment, decrement, reset, incrementByAmount) to update the counter’s value. The reducer and actions are exported to be used in the Redux store and components, allowing the app to manage the counter's state consistently and centrally.
