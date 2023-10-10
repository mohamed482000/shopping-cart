import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

function SubmitToSave({ springIngSubmitButton }) {
  return (
    <Button variant="primary" className="register-submit" type="submit">
      {springIngSubmitButton ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        "submit"
      )}
    </Button>
  );
}

export default SubmitToSave;
