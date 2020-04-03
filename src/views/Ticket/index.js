import React, { useState } from "react";
import { History } from "../../History";
import queryString from "query-string";
import { Button, Form } from "react-bootstrap";
import { useEffect } from "react";

export const Ticket = props => {
  let stepper;
  // replace for query of react router
  const qs = queryString.parse(location.search);
  const [query, setQuery] = useState("");

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

  useEffect(() => {
    setQuery(qs);
  }, [props.location]);

  return (
    <>
      <h1>Sacar turno</h1>
      {stepper}
    </>
  );
};

const SelectCompany = () => {
  const [company, setCompany] = useState("A");

  const changeCompany = event => {
    let currentCompany = event.target.value;
    setCompany(currentCompany);
    History.push(`/turno?empresa=${currentCompany}`);
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

  const changeBranch = event => {
    let currentBranch = event.target.value;
    setBranch(currentBranch);
    History.push(`/turno?empresa=${company}&sucursal=${currentBranch}`);
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
