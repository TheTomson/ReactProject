import React from "react";
import ReactDOM from "react-dom";
import { Reset } from "styled-reset";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Reset />
    <App />
  </Provider>,
  document.getElementById("root")
);
