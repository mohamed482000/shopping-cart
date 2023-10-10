import React from "react";
import Form from "react-bootstrap/Form";

function CheckInput() {
  return (
    <Form.Group className="mb-3">
      <Form.Check type="checkbox" className="last-label" label="Remember Me " />
    </Form.Group>
  );
}

export default CheckInput;
