import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  //   count reads the current counter value from the Redux store.
  // dispatch is a function that sends actions to the Redux store, allowing it to update the counter state.

  function handleIncreamentClick() {
    dispatch(increment());
  }

  function handleDecreamentClick() {
    dispatch(decrement());
  }
  function handleResetClick() {
    dispatch(reset());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncAmount() {
    dispatch(incrementByAmount(amount));
  }

  //   handleIncreamentClick calls increment, which increases the counter.
  // handleDecreamentClick calls decrement, which decreases the counter.
  // handleResetClick calls reset, which sets the counter back to its initial value.
  return (
    <div className="container">
      <button className="bg-red-400" onClick={handleIncreamentClick}>
        +
      </button>
      <p>Count:{count}</p>
      <button onClick={handleDecreamentClick}>-</button>

      <div className="flex justify-center">
        <input
          type="number"
          value={amount}
          placeholder="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <div>
          <button onClick={handleIncAmount}>Inc by Amount</button>
        </div>
      </div>

      <div className="flex justify-center">
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );
  //   The + and - buttons trigger increment and decrement actions, respectively.
  // The Reset button resets the counter to its default value.
  // count is displayed between the buttons, showing the current value of the counter.
}

export default App;

// This code is a basic React component that uses Redux to manage the state of a counter. It allows the user to increment, decrement, and reset the counter value.

// This component provides a simple counter with increment, decrement, and reset buttons. Each button sends an action to the Redux store, which updates the counter state accordingly. The current count is displayed between the increment and decrement buttons.
