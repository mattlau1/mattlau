import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/"></Route>
          <Route exact path="/"></Route>
          <Route exact path="/"></Route>
          <Route exact path="/"></Route>
          <Route exact path="/"></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
