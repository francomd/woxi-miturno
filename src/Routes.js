import React from "react";
// import { useState } from "react";

import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Portal } from "./views/Portal";
import { Ticket } from "./views/Ticket";

export const Routes = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Portal} />
        <Route exact path="/turno">
          <Ticket />
        </Route>
      </Switch>
    </Container>
  );
};
