import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function RegisterButton() {
  const navigate = useNavigate();

  return (
    <Button
      className="text-capitalize"
      onClick={() => navigate("/register")}
      variant="primary"
    >
      create new acount
    </Button>
  );
}

export default RegisterButton;
