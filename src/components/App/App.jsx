import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";

//Components
import PageOne from "../PageOne/PageOne";
import PageTwo from "../PageTwo/PageTwo";
import PageThree from "../PageThree/PageThree";
import PageFour from "../PageFour/PageFour";
import PageFive from "../PageFive/PageFive";
import PageSix from "../PageSix/PageSix";

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

        <Route exact path="/PageThree">
          <PageThree />
        </Route>

        <Route exact path="/PageFour">
          <PageFour />
        </Route>

        <Route exact path="/PageFive">
          <PageFive />
        </Route>

        <Route exact path="/PageSix">
          <PageSix />
        </Route>
      </Router>
    </div>
  );
}

export default App;
