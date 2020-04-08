import React from "react";
import { SelectCompany } from "./SelectCompany";
import { SelectBranch } from "./SelectBranch";
import { SelectReason } from "./SelectReason";
import { History } from "../../../History";
import { HeaderMessage } from "Commons/HeaderMessage";
import { welcomeMsg, branchMsg, reasonMsg } from "./Messages";

export const TicketStepper = ({ query }) => {
  let user = { name: "Vico" }; // TODO Fetch user name
  let companies = [
    {
      name: "Farmacias Lider",
      img: "01.png",
      id: 0,
    },
    {
      name: "Municipalidad de las Heras",
      img: "02.png",
      id: 1,
    },
    {
      name: "Farmacia del Aguilar",
      img: "03.png",
      id: 2,
    },
    {
      name: "Hospital Italiano",
      img: "04.png",
      id: 3,
    },
  ];
  let branches = [
    {
      name: "LIDER JUJUY",
      location: "Jujuy 965, Córdoba",
      id: 0,
    },
    {
      name: "LIDER COLON",
      location: "Av. Colón 845, Córdoba",
      id: 0,
    },
    {
      name: "LIDER CLINICAS",
      location: "Sta. Rosa 922, Córdoba",
      id: 0,
    },
  ];
  let reasons = [
    {
      name: "Obras Sociales",
      location: "Jujuy 965, Córdoba",
      folder: true,
      id: 1,
      parentId: 0,
    },
    {
      name: "Sin Obra Social y Perfumeria",
      location: "Av. Colón 845, Córdoba",
      folder: false,
      id: 2,
      parentId: 0,
    },
    {
      name: "Dermocosmetica",
      location: "Sta. Rosa 922, Córdoba",
      folder: false,
      id: 3,
      parentId: 0,
    },
    {
      name: "Pami",
      location: "Sta. Rosa 922, Córdoba",
      folder: false,
      id: 4,
      parentId: 1,
    },
  ];

  const selectCompany = (value) => {
    History.push(`/?idEmpresa=${value}`);
  };

  const selectBranch = (value) => {
    History.push(`/?idEmpresa=${query.idEmpresa}&idSucursal=${value}`);
  };

  const selectReason = (value) => {
    History.push(
      `/?idEmpresa=${query.idEmpresa}&idSucursal=${query.idSucursal}&motivo=${value}`
    );
  };

  const generateTicket = () => {
    let ticket = {
      company: query.idEmpresa,
      branch: query.idSucursal,
      reason: query.motivo,
    };

    const loggedIn = JSON.parse(localStorage.getItem("user"));

    if (loggedIn) {
      localStorage.setItem("ticket", JSON.stringify(ticket));
      History.push(`/miturno`);
    } else {
      History.push(
        `/login/?idEmpresa=${query.idEmpresa}&idSucursal=${query.idSucursal}&motivo=${query.motivo}`
      );
    }
  };

  return query && query.idEmpresa ? (
    query.idSucursal ? ( // queryString -> empresa & sucursal
      <>
        <HeaderMessage data={reasonMsg(query.idEmpresa, query.idSucursal)} />
        <SelectReason
          reasons={reasons}
          onChange={(value) => selectReason(value)}
          onClick={() => generateTicket()}
        />
      </>
    ) : (
      // queryString -> empresa
      <>
        <HeaderMessage data={branchMsg(query.idEmpresa)} />
        <SelectBranch
          branches={branches}
          onChange={(value) => selectBranch(value)}
        />
      </>
    )
  ) : (
    // queryString -> null
    <>
      <HeaderMessage data={welcomeMsg(user.name)} />
      <h6
        className="text-primary font-weight-bold text-uppercase"
        style={{ fontSize: "14px", marginLeft: "1rem" }}
      >
        Filas activas
      </h6>
      <SelectCompany
        companies={companies}
        onChange={(value) => selectCompany(value)}
      />
      <br />
      <h6
        className="text-primary font-weight-bold text-uppercase"
        style={{ fontSize: "14px", marginLeft: "1rem" }}
      >
        EN PROCESO DE ACTIVACIÓN
      </h6>
      <SelectCompany companies={companies} disabled={true} />
    </>
  );
};
