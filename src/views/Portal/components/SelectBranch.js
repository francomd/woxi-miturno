import React from "react";
import { Form } from "react-bootstrap";

export const SelectBranch = ({ onChange }) => {
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
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </Form.Control>
    </Form>
  );
};
