import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";

//Components
import PageOne from "../PageOne/PageOne";
import PageTwo from "../PageTwo/PageTwo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/">
          <PageOne />
        </Route>
        <Route exact path="/PageTwo">
          <PageTwo />
        </Route>
      </Router>
    </div>
  );
}

export default App;
