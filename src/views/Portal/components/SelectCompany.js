import React from "react";
import { Form } from "react-bootstrap";

export const SelectCompany = ({ onChange }) => {
  return (
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
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </Form.Control>
    </Form>
  );
};
