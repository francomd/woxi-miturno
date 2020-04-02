import React from "react";
import { Link } from "react-router-dom";

export const Portal = () => {
  return (
    <>
      <h1>Portal</h1>
      <Link to="/turno">
        <button>Sacar turno</button>
      </Link>
    </>
  );
};
