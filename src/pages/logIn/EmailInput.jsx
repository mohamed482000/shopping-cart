import React from "react";
import Form from "react-bootstrap/Form";

function EmailInput({
  handleOnChange,
  setEmail,
  checkEmail,
  setCheckEmail,
  checkEmailExist,
  setCheckEmailExist,
}) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        onChange={(e) =>
          handleOnChange(e, setEmail, setCheckEmail, setCheckEmailExist)
        }
        type="email"
        placeholder="Enter email"
      />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
      {checkEmail == false ? (
        <h6 className=" text-danger">email required</h6>
      ) : checkEmailExist == false ? (
        <h6 className=" text-danger">email not found</h6>
      ) : (
        ""
      )}
    </Form.Group>
  );
}

export default EmailInput;
