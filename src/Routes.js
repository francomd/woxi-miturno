import React from "react";
// import { useState } from "react";

import { Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "./views/Home";
import { Example } from "./views/Example";

export const Routes = ({ history }) => {
  return (
    <Router history={history}>
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/example">
        <span>Example</span>
      </Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/example" component={Example} />
      </Switch>
    </Router>
  );
};
