import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

import { Routes } from "./Routes";
import { Drawer } from "./components/Drawer";

export const App = () => {
  const [openDrawer, toggleDrawer] = useState(false);

  return (
    <>
      <Navbar bg="white" className="d-flex justify-content-between">
        <img
          src={require("./assets/img/menu.svg")}
          alt="Menu"
          onClick={() => toggleDrawer(!openDrawer)}
        />
        <Navbar.Brand href="#home" className="mr-0">
          <img
            alt="Woxi Logo"
            src={require("./assets/img/woxi-logo.svg")}
            width="66"
            className="d-inline-block align-center"
          />
        </Navbar.Brand>
      </Navbar>
      <Drawer open={openDrawer} onToggle={() => toggleDrawer(!openDrawer)}>
        <Link to="/">
          <span>Portal</span>
        </Link>
        <Link to="/miturno">
          <span>Mi turno</span>
        </Link>
      </Drawer>
      <Routes />
    </>
  );
};
