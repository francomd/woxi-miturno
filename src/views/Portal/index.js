import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { TicketStepper } from "./components/TicketStepper";

export const Portal = props => {
  let stepper, title;
  // replace for query of react router
  const qs = queryString.parse(location.search);
  const [query, setQuery] = useState("");

  query && query.empresa
    ? query.sucursal
      ? (title = "Seleccione el Motivo")
      : (title = "Seleccione una Sucursal")
    : (title = "Seleccione una Empresa");

  useEffect(() => {
    setQuery(qs);
  }, [props.location]);

  return (
    <>
      <h1>{title}</h1>
      <br />
      <TicketStepper query={query} />
    </>
  );
};
