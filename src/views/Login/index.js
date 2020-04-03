import React from "react";
import { Button } from "react-bootstrap";
import { History } from "../../History";
import queryString from "query-string";

export const Login = () => {
  const query = queryString.parse(location.search);

  const login = () => {
    if (query && query.motivo) {
      localStorage.setItem("user", true);
      History.push(`/${location.search}`);
    } else {
      localStorage.setItem("user", true);
      History.push("/");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <br />
      <Button onClick={() => login()}>Ingresar</Button>
    </>
  );
};
