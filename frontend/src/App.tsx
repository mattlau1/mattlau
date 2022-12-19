import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from "./pages/info/Landing";
import { HamsterHealth } from "./pages/projects/HamsterHealth";
import Nav from "./components/Nav/Nav";
import { Footer } from "./components/App/Footer";
import { HamsterWealth } from "./pages/projects/HamsterWealth";
import { LoopMania } from "./pages/projects/LoopMania";
import ScrollbarWrapper from "./components/App/ScrollbarWrapper";
import { About } from "./pages/info/About";
import { Shorten } from "./pages/apps/Shorten";
import { ShortURL } from "./pages/misc/ShortURL";
import Host from "./pages/apps/Host";
import { FileHosting } from "./pages/projects/FileHosting";
import { Instacook } from "./pages/projects/Instacook";

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
            <Route path="/projects/instacook">
              <Instacook />
            </Route>
            <Route path="/projects/host">
              <FileHosting />
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
