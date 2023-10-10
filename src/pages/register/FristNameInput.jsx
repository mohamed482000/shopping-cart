import React from "react";
import Form from "react-bootstrap/Form";
import { BiSolidErrorCircle } from "react-icons/bi";
import Col from "react-bootstrap/Col";

function FristNameInput({
  handleOnChange,
  firstName,
  setFirstName,
  checkFirstName,
  setCheckFirstName,
}) {
  return (
    <Form.Group className="input-contain" as={Col}>
      <Form.Control
        className={checkFirstName ? "" : "border-red"}
        value={firstName}
        onChange={(e) => handleOnChange(e, setFirstName, setCheckFirstName)}
        type="text"
        placeholder="Enter frist name"
      />
      {checkFirstName ? "" : <BiSolidErrorCircle />}
      {checkFirstName ? "" : <h6 className=" text-danger">required</h6>}
    </Form.Group>
  );
}

export default FristNameInput;
