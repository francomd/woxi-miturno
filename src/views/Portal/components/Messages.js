import React from "react";

export const welcomeMsg = (userName) => {
  return {
    header: (
      <>
        ¡Bienvenida, <b>{userName}</b>!
      </>
    ),
    subheader: (
      <>
        <b>Elige la empresa</b> en la que te encuentras para{" "}
        <b>seguir tu turno en tiempo real</b>.
      </>
    ),
  };
};

export const branchMsg = (companyName) => {
  return {
    header: (
      <>
        Empresa:
        <br />
        <b>{companyName}</b>
      </>
    ),
    description: <>¿En qué sucursal te encuentras?</>,
  };
};

export const reasonMsg = (companyName, branchName) => {
  return {
    header: (
      <>
        Empresa:
        <br />
        <b>{companyName}</b>
        <br />
        Sucursal:
        <br />
        <b>{branchName}</b>
        <br />
      </>
    ),
    description: <>Por favor, indique el motive de su visita:</>,
  };
};
