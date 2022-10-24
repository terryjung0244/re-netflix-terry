import React from "react";
import ReactDOM from "react-dom/client";
import "index.css";
import App from "App";
import { Provider } from "react-redux";
import { store } from "service/store";
import { BrowserRouter as Router } from "react-router-dom"; // Declare BrownserRouter as Router
import reportWebVitals from "reportWebVitals";

const rootNode = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootNode).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
