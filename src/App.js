import React, { useState } from "react";
import { Router, Link, useHistory } from "react-router-dom";
import { Navbar } from "react-bootstrap";

import { Routes } from "./Routes";
import { Drawer } from "./components/Drawer";

export const App = () => {
  const [openDrawer, toggleDrawer] = useState(false);
  let history = useHistory();

  return (
    <>
      <Navbar bg="white" className="px-0 d-flex justify-content-between">
        <img
          src={require("./assets/img/menu.svg")}
          alt="Menu"
          onClick={() => toggleDrawer(!openDrawer)}
        />
        <Navbar.Brand href="#home">
          <img
            alt="Woxi Logo"
            src={require("./assets/img/woxi-logo.svg")}
            width="66"
            className="mr-0 d-inline-block align-top"
          />
        </Navbar.Brand>
      </Navbar>
      <Router history={history}>
        <Drawer open={openDrawer} onToggle={() => toggleDrawer(!openDrawer)}>
          <Link to="/">
            <span>Portal</span>
          </Link>
          <Link to="/miturno">
            <span>Mi turno</span>
          </Link>
        </Drawer>
        <Routes />
      </Router>
    </>
  );
};
