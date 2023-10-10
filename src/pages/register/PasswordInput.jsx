import React from "react";
import Form from "react-bootstrap/Form";
import { BiSolidErrorCircle } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

function PasswordInput({
  handleOnChange,
  setPassword,
  checkPassword,
  setCheckPassword,
  hidePass,
  setHidePass,
}) {
  return (
    <Form.Group className="input-container mb-3">
      <Form.Control
        className={checkPassword ? "" : "border-red"}
        type={hidePass ? "text" : "password"}
        onChange={(e) => handleOnChange(e, setPassword, setCheckPassword)}
        placeholder="Enter your password"
      />
      {hidePass == true && checkPassword == true ? (
        <BsEyeSlashFill
          className="text-black"
          onClick={() => setHidePass((prev) => !prev)}
        />
      ) : hidePass == false && checkPassword == true ? (
        <BsEyeFill
          className="text-black"
          onClick={() => setHidePass((prev) => !prev)}
        />
      ) : (
        <BiSolidErrorCircle />
      )}
      {checkPassword ? "" : <h6 className="text-danger">required</h6>}
    </Form.Group>
  );
}

export default PasswordInput;
