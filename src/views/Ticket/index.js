import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

export const Ticket = () => {
  let stepper;
  const query = queryString.parse(location.search);

  query && query.empresa
    ? query.sucursal
      ? (stepper = (
          <>
            <h4>Empresa: {query.empresa}</h4>
            <br />
            <h5>Sucursal: {query.sucursal}</h5>
          </>
        ))
      : (stepper = (
          <>
            <h4>{query.empresa}</h4>
            <SelectBranch company={query.empresa} />
          </>
        ))
    : (stepper = (
        <>
          <h4>Seleccionar empresa</h4>
          <SelectCompany />
        </>
      ));

  return (
    <>
      <h1>Sacar turno</h1>
      {stepper}
    </>
  );
};

const SelectCompany = () => {
  const [company, setCompany] = useState("A");
  let history = useHistory();

  const changeCompany = event => {
    let currentCompany = event.target.value;
    setCompany(currentCompany);
    history.push(`/turno?empresa=${currentCompany}`);
  };

  return (
    <select value={company} onChange={e => changeCompany(e)}>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
  );
};

const SelectBranch = ({ company }) => {
  const [branch, setBranch] = useState(1);
  let history = useHistory();

  const changeBranch = event => {
    let currentBranch = event.target.value;
    setBranch(currentBranch);
    history.push(`/turno?empresa=${company}&sucursal=${currentBranch}`);
  };

  return (
    <select value={branch} onChange={e => changeBranch(e)}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  );
};
