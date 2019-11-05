import React from "react";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Resume from "./Resume";
import Projects from "./Projects";
import { Switch, Route } from "react-router-dom";
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
  </Switch>
);

export default Main;
