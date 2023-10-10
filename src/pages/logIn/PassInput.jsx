import React from "react";
import Form from "react-bootstrap/Form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

function PassInput({
  handleOnChange,
  setPassword,
  setCheckPassword,
  checkPassword,
  hidePass,
  setHidePass,
  checkPassExist,
  setCheckPassExist,
}) {
  return (
    <Form.Group className="mb-3 for-eye-icon">
      <Form.Label>Password</Form.Label>

      <Form.Control
        type={hidePass ? "text" : "password"}
        onChange={(e) =>
          handleOnChange(e, setPassword, setCheckPassword, setCheckPassExist)
        }
        placeholder="Password"
        aria-describedby="basic-addon1"
      />
      {hidePass ? (
        <BsEyeSlashFill onClick={() => setHidePass((prev) => !prev)} />
      ) : (
        <BsEyeFill onClick={() => setHidePass((prev) => !prev)} />
      )}
      <Form.Text className=" text-muted">
        admin's email : mohamed2000@gmail.com
      </Form.Text>
      <Form.Text className="admin-pass text-muted">pass : 12345</Form.Text>

      {!checkPassword ? (
        <h6 className=" text-danger">password required</h6>
      ) : !checkPassExist ? (
        <h6 className=" text-danger">rong password</h6>
      ) : (
        ""
      )}
    </Form.Group>
  );
}

export default PassInput;
