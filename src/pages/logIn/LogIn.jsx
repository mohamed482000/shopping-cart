import React, { useContext, useEffect, useState } from "react";
import "./logIn.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EmailInput from "./EmailInput";
import PassInput from "./PassInput";
import CheckInput from "./CheckInput";
import SubmitButton from "./SubmitButton";
import RegisterButton from "./RegisterButton";
import UserStore from "../../context/userContext/UserContext";

function LogIn() {
  const navigate = useNavigate();
  const { reRender, setReRender } = useContext(UserStore);
  const [hidePass, setHidePass] = useState(false);

  const [allUsersData, setAllUsersData] = useState([]);

  const [password, setPassword] = useState(0);
  const [checkPassword, setCheckPassword] = useState(true);
  const [checkPassExist, setCheckPassExist] = useState(true);

  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState(true);
  const [checkEmailExist, setCheckEmailExist] = useState(true);

  useEffect(() => {
    if (allUsersData.length > 0) {
      findTheUser();
    }
  }, [allUsersData]);
  /// set state by the input's value and set check for this input to true
  const handleOnChange = (e, setAy7aga, setCheckAy7aga, setCheckExistOrNot) => {
    setAy7aga(e.target.value);
    setCheckAy7aga(true);
    setCheckExistOrNot(true);
  };
  ///check we have this user or not
  const findTheUser = () => {
    const checkOnEmail = allUsersData.some((user) => user.email == email);
    const checkOnPass = allUsersData.some((user) => user.password == password);
    if (checkOnEmail == false) {
      setCheckEmailExist(false);
    } else if (checkOnPass == false) {
      setCheckPassExist(false);
    } else {
      const user = allUsersData.find((i) => i.email === email);

      localStorage.setItem("role", user.role);
      localStorage.setItem("image", user.image);
      localStorage.setItem("id", user.id);
      navigate("/shop");

      setReRender(!reRender);
    }
  };
  /// check on all required inputs have data or not and send success user data to server
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email == "") {
      setCheckEmail(false);
      if (password == "") {
        setCheckPassword(false);
      }
    } else if (password == "") {
      setCheckPassword(false);
    } else {
      axios({
        method: "get",
        url: "https://shopping-cart-data.onrender.com/users",
      }).then((data) => setAllUsersData(data.data));
    }
  };
  return (
    <div className="logIn-component">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <EmailInput
          handleOnChange={handleOnChange}
          setEmail={setEmail}
          checkEmail={checkEmail}
          setCheckEmail={setCheckEmail}
          checkEmailExist={checkEmailExist}
          setCheckEmailExist={setCheckEmailExist}
        />

        <PassInput
          handleOnChange={handleOnChange}
          setPassword={setPassword}
          hidePass={hidePass}
          setHidePass={setHidePass}
          checkPassword={checkPassword}
          setCheckPassword={setCheckPassword}
          checkPassExist={checkPassExist}
          setCheckPassExist={setCheckPassExist}
        />
        <CheckInput />
        <SubmitButton />
        <RegisterButton />
      </Form>
    </div>
  );
}

export default LogIn;
