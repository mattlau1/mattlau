import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages/Landing";
import { HamsterHealth } from "./pages/HamsterHealth";
import Nav from "./components/Nav";
import Scrollbar from "react-scrollbars-custom";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Scrollbar style={{ width: "100vw", height: "100vh" }}>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/projects/hamsterwealth">
              <HamsterHealth />
            </Route>
            <Route path="/projects/hamsterhealth">
              <HamsterHealth />
            </Route>
            {/* <Route path="/"></Route>
          <Route path="/"></Route>
          <Route path="/"></Route>
          <Route path="/"></Route> */}
          </Switch>
          <Footer />
        </Scrollbar>
      </Router>
    </>
  );
}

export default App;
