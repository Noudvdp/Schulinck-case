import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./styling/default.css";
import Index from "./pages";

ReactDOM.render(
    <Router>
      <div>
        <Route exact path='/' component={Index} />
      </div>
    </Router>,
    document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to Register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
