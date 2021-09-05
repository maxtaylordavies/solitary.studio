import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Projects } from "./pages/Projects/Projects";
import { Contact } from "./pages/Contact/Contact";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
