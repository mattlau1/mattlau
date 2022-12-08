import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { HamsterHealth } from "./pages/HamsterHealth";
import Nav from "./components/Nav/Nav";
import { Footer } from "./components/Footer";
import { HamsterWealth } from "./pages/HamsterWealth";
import { LoopMania } from "./pages/LoopMania";
import ScrollbarWrapper from "./components/ScrollbarWrapper";
import { About } from "./pages/About";
import { Shorten } from "./pages/Shorten";
import { ShortURL } from "./pages/ShortURL";
import Host from "./pages/Host";

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
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects/hamsterwealth">
              <HamsterWealth />
            </Route>
            <Route path="/projects/hamsterhealth">
              <HamsterHealth />
            </Route>
            <Route path="/projects/loopmania">
              <LoopMania />
            </Route>
            <Route path="/shorten">
              <Shorten />
            </Route>
            <Route path="/host">
              <Host />
            </Route>
            <Route path="/:shortURL">
              <ShortURL />
            </Route>
          </Switch>
          <Footer />
        </ScrollbarWrapper>
      </Router>
    </>
  );
}

export default App;
