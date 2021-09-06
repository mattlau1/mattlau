import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { HamsterHealth } from "./pages/HamsterHealth";
import Nav from "./components/Nav";
import { Footer } from "./components/Footer";
import { HamsterWealth } from "./pages/HamsterWealth";
import ScrollbarWrapper from "./components/ScrollbarWrapper";

function App() {
  return (
    <>
      <Router>
        <ScrollbarWrapper>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/projects/hamsterwealth">
              <HamsterWealth />
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
        </ScrollbarWrapper>
      </Router>
    </>
  );
}

export default App;
