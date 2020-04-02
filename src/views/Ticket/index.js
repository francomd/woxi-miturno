import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { Button, Form } from "react-bootstrap";

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
            <Button>Generar turno</Button>
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
    <Form>
      <Form.Control
        as="select"
        value="0"
        onChange={e => changeCompany(e)}
        custom
      >
        <option disabled value="0">
          Select...
        </option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </Form.Control>
    </Form>
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
    <Form>
      <Form.Control
        as="select"
        value="0"
        onChange={e => changeBranch(e)}
        custom
      >
        <option disabled value="0">
          Select...
        </option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Form.Control>
    </Form>
  );
};
