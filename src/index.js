import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// Items in the cart
const feedback = (state = {}, action) => {
  if (action.type === "ADD_TO_FEEDBACK") {
    return { ...state, [action.payload.property]: action.payload.value };
  }
  if (action.type === "GET_FEEDBACK") {
    return state;
  }
  if (action.type === "RESET_FEEDBACK") {
    return (state = {});
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feedback,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);
