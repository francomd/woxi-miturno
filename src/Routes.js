import React from "react";

import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import { Portal } from "./views/Portal";
import { MyTicket } from "./views/MyTicket";
import { Profile } from "./views/Profile";
import { Login } from "./views/Login";
import { Logout } from "./views/Logout";

export const Routes = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={Portal} />
        <Route exact path="/miturno" component={MyTicket}></Route>
        <Route exact path="/perfil" component={Profile}></Route>
        <Route exact path="/logout" component={Logout}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </Container>
  );
};
