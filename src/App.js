import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Questions from "./components/questions";
import phq9data from "./phq9data";
import gad7data from "./gad7data";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="menu">
          <ul>
            <li className="item">
              <Link to="/phq9">PHQ-9</Link>
            </li>
            <li className="item">
              <Link to="/gad7">GAD-7</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/phq9">
            <Questions data={phq9data} />
          </Route>
          <Route path="/gad7">
            <Questions data={gad7data} />
          </Route>
          <Route path="/">
            <Redirect
              to={{
                pathname: "/phq9",
              }}
            ></Redirect>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
