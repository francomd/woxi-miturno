import React from "react";
import { History } from "../../History";

export const Logout = () => {
  setTimeout(() => {
    localStorage.setItem("user", false);
    History.push("/login");
  }, 3000);

  return (
    <>
      <h1>Logout</h1>
      <br />
      <h6>Cerrando sesión...</h6>
    </>
  );
};
