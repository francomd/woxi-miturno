import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Portal = () => {
  return (
    <>
      <h1>Portal</h1>
      <Link to="/turno">
        <Button variant="primary">Sacar turno</Button>
      </Link>
    </>
  );
};
