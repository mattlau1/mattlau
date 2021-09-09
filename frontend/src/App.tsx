import React from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { HamsterHealth } from "./pages/HamsterHealth";
import Nav from "./components/Nav";
import { Footer } from "./components/Footer";
import { HamsterWealth } from "./pages/HamsterWealth";
import ScrollbarWrapper from "./components/ScrollbarWrapper";
import { About } from "./pages/About";
import RouteChangeTracker from "./components/RouteChangeTracker";

function App() {
  const TRACKING_ID = "G-B572TF6FJ6";
  ReactGA.initialize(TRACKING_ID);
  return (
    <>
      <Router>
        <RouteChangeTracker />
        <ScrollbarWrapper>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects/hamsterwealth">
              <HamsterWealth />
            </Route>
            <Route path="/projects/hamsterhealth">
              <HamsterHealth />
            </Route>
          </Switch>
          <Footer />
        </ScrollbarWrapper>
      </Router>
    </>
  );
}

export default App;
