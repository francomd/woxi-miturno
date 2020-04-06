import React from "react";
import { SelectCompany } from "./SelectCompany";
import { SelectBranch } from "./SelectBranch";
import { SelectReason } from "./SelectReason";
import { History } from "../../../History";
import { HeaderMessage } from "../../../components/HeaderMessage";
import { welcomeMsg, branchMsg, reasonMsg } from "./Messages";

export const TicketStepper = ({ query }) => {
  let user = { name: "Vico" }; // TODO Fetch user name

  const selectCompany = (value) => {
    History.push(`/?empresa=${value}`);
  };

  const selectBranch = (value) => {
    History.push(`/?empresa=${query.empresa}&sucursal=${value}`);
  };

  const selectReason = (value) => {
    History.push(
      `/?empresa=${query.empresa}&sucursal=${query.sucursal}&motivo=${value}`
    );
  };

  const generateTicket = () => {
    let ticket = {
      company: query.empresa,
      branch: query.sucursal,
      reason: query.motivo,
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
        <HeaderMessage
          data={reasonMsg(query.empresa, query.sucursal)}
        ></HeaderMessage>
        <SelectReason
          onChange={(value) => selectReason(value)}
          onClick={() => generateTicket()}
        />
      </>
    ) : (
      <>
        <HeaderMessage data={branchMsg(query.empresa)}></HeaderMessage>
        <SelectBranch onChange={(value) => selectBranch(value)} />
      </>
    )
  ) : (
    <>
      <HeaderMessage data={welcomeMsg(user.name)}></HeaderMessage>
      <SelectCompany onChange={(value) => selectCompany(value)} />
    </>
  );
};
