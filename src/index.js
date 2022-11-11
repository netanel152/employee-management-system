import React from "react";
import ReactDOM from "react-dom";
import { store } from './store'
import { Provider } from 'react-redux'
import "./index.scss";
import App from "./App";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
