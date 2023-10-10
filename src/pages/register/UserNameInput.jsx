import React from "react";
import Form from "react-bootstrap/Form";
import { BiSolidErrorCircle } from "react-icons/bi";

function UserNameInput({
  handleOnChange,
  userName,
  setUserName,
  checkUserName,
  setCheckUserName,
}) {
  return (
    <Form.Group className="input-container mb-3">
      <Form.Control
        className={checkUserName ? "" : "border-red"}
        value={userName}
        onChange={(e) => handleOnChange(e, setUserName, setCheckUserName)}
        type="text"
        placeholder="Enter user name"
      />
      {checkUserName ? "" : <BiSolidErrorCircle />}
      {checkUserName ? "" : <h6 className=" text-danger">required</h6>}
    </Form.Group>
  );
}

export default UserNameInput;
