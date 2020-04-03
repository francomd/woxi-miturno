import React from "react";
import { SelectCompany } from "./SelectCompany";
import { SelectBranch } from "./SelectBranch";
import { SelectReason } from "./SelectReason";
import { History } from "../../../History";

export const TicketStepper = ({ query }) => {
  const selectCompany = value => {
    History.push(`/?empresa=${value}`);
  };

  const selectBranch = value => {
    History.push(`/?empresa=${query.empresa}&sucursal=${value}`);
  };

  const selectReason = value => {
    History.push(
      `/?empresa=${query.empresa}&sucursal=${query.sucursal}&motivo=${value}`
    );
  };

  const generateTicket = () => {
    let ticket = {
      company: query.empresa,
      branch: query.sucursal,
      reason: query.motivo
    };

    const loggedIn = JSON.parse(localStorage.getItem("user"));

    if (loggedIn) {
      localStorage.setItem("ticket", JSON.stringify(ticket));
      History.push(`/miturno`);
    } else {
      History.push(
        `/login/?empresa=${query.empresa}&sucursal=${query.sucursal}&motivo=${query.motivo}`
      );
    }
  };

  return query && query.empresa ? (
    query.sucursal ? (
      <>
        <h4>Empresa: {query.empresa}</h4>
        <h5>Sucursal: {query.sucursal}</h5>
        <br />
        <SelectReason
          onChange={value => selectReason(value)}
          onClick={() => generateTicket()}
        />
      </>
    ) : (
      <>
        <h4>Empresa: {query.empresa}</h4>
        <br />
        <SelectBranch onChange={value => selectBranch(value)} />
      </>
    )
  ) : (
    <>
      <SelectCompany onChange={value => selectCompany(value)} />
    </>
  );
};
