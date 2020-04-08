import React, { useState, useEffect } from "react";
import { Navigation, Link, Slash, Back } from "./style";

export const Breadcrumbs = ({ history, onGoBack }) => {
  const [a, setA] = useState(history);

  useEffect(() => {
    setA(history);
    console.log("here");
  }, [history]);
  return (
    <Navigation>
      <Back onClick={() => onGoBack()}>Atrás</Back>
      {a.map((link, i) => {
        return (
          <>
            <Link key={link.name}>{link.name}</Link>
            <Slash key={`slash${link.name}`}>/</Slash>
          </>
        );
      })}
    </Navigation>
  );
};
