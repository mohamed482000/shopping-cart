import React from "react";
import Form from "react-bootstrap/Form";
import { BiSolidErrorCircle } from "react-icons/bi";
import Col from "react-bootstrap/Col";

function LastNameInput({
  handleOnChange,
  lastName,
  setLastName,
  checkLastName,
  setCheckLastName,
}) {
  return (
    <Form.Group className="input-contain" as={Col}>
      <Form.Control
        className={checkLastName ? "" : "border-red"}
        value={lastName}
        onChange={(e) => handleOnChange(e, setLastName, setCheckLastName)}
        type="text"
        placeholder="Enter last name"
      />
      {checkLastName ? "" : <BiSolidErrorCircle />}
      {checkLastName ? "" : <h6 className=" text-danger">required</h6>}
    </Form.Group>
  );
}

export default LastNameInput;
