import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// This code is the entry point for a React application that is set up to use Redux for state management. Here’s a breakdown:

// Purpose of the Code
// This code renders the main <App /> component to the root of the webpage and wraps it in a Redux provider to make the Redux store available throughout the app.

// Summary
// This code renders the main React app component (App) inside the HTML element with the ID root. By wrapping <App /> with <Provider store={store}>, it makes the Redux store available across the entire app, allowing any component within <App /> to access the Redux state and dispatch actions.

// Link to configure React-redux: https://redux-toolkit.js.org/tutorials/quick-start
