import React from "react";
import Form from "react-bootstrap/Form";
import { BiSolidErrorCircle } from "react-icons/bi";

function EmailInput({
  handleOnChange,
  email,
  setEmail,
  checkEmail,
  setCheckEmail,
}) {
  return (
    <Form.Group className="input-container mb-3">
      <Form.Control
        className={checkEmail ? "" : "border-red"}
        value={email}
        onChange={(e) => handleOnChange(e, setEmail, setCheckEmail)}
        type="email"
        placeholder="Enter your email"
      />
      {checkEmail ? "" : <BiSolidErrorCircle />}
      {checkEmail ? "" : <h6 className=" text-danger">invalid email</h6>}
    </Form.Group>
  );
}

export default EmailInput;
