import React from "react";
import { Form, Button } from "react-bootstrap";
import queryString from "query-string";

export const SelectReason = ({ onChange, onClick }) => {
  const query = queryString.parse(location.search);

  return (
    <>
      <Form>
        <Form.Control
          as="select"
          value="0"
          onChange={e => onChange(e.target.value)}
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
      <br />
      {query.motivo && <Button onClick={() => onClick()}>Sacar turno</Button>}
    </>
  );
};
