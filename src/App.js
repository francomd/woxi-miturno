import React from "react";
import { Routes } from "./Routes";
import { createBrowserHistory } from "history";

export const App = () => {
  const history = createBrowserHistory();

  return (
    <>
      <Routes history={history} />
    </>
  );
};
