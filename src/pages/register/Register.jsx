import React, { useContext, useState } from "react";
import "./register.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FristNameInput from "./FristNameInput";
import LastNameInput from "./LastNameInput";
import UserNameInput from "./UserNameInput";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import ImageInput from "./ImageInput";
import GendCityPhoneInputs from "./GendCityPhoneInputs";
import SubmitToSave from "./SubmitToSave";
import DashBoardStore from "../../context/dashBoard/DashBoardContext";

function Register() {
  const { setUpdateUsersAndProd } = useContext(DashBoardStore);
  const regularExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const navigate = useNavigate();
  const [hidePass, setHidePass] = useState(false);
  const [springIngSubmitButton, setSpringIngSubmitButton] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [checkFirstName, setCheckFirstName] = useState(true);

  const [lastName, setLastName] = useState("");
  const [checkLastName, setCheckLastName] = useState(true);

  const [userName, setUserName] = useState("");
  const [checkUserName, setCheckUserName] = useState(true);

  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState(true);

  const [password, setPassword] = useState(0);
  const [checkPassword, setCheckPassword] = useState(true);

  const [image, setImage] = useState("");
  const [checkImage, setCheckImage] = useState(true);

  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);

  /// set state by the input's value and set check for this input to true
  const handleOnChange = (e, setAy7aga, setCheckAy7aga) => {
    setAy7aga(e.target.value);
    setCheckAy7aga(true);
  };
  /// check on all required inputs have data or not and send success user data to server
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (firstName == "") {
      setCheckFirstName(false);
      if (lastName == "") {
        setCheckLastName(false);
        if (userName == "") {
          setCheckUserName(false);
          if (email == "") {
            setCheckEmail(false);
            if (password == "") {
              setCheckPassword(false);
            }
          }
        }
      }
    } else if (lastName == "") {
      setCheckLastName(false);
      if (userName == "") {
        setCheckUserName(false);
        if (email == "") {
          setCheckEmail(false);
          if (password == "") {
            setCheckPassword(false);
          }
        }
      }
    } else if (userName == "") {
      setCheckUserName(false);
      if (email == "") {
        setCheckEmail(false);
        if (password == "") {
          setCheckPassword(false);
        }
      }
    } else if (email == "") {
      setCheckEmail(false);
      if (password == "") {
        setCheckPassword(false);
      }
    } else if (password == "") {
      setCheckPassword(false);
    } else if (image.length > 0 && image.slice(0, 4) !== "http") {
      setCheckImage(false);
    } else if (!regularExp.test(email)) {
      setCheckEmail(false);
    } else {
      const newUser = {
        firstName,
        lastName,
        email,
        userName,
        password,
        role: "member",
        image: image
          ? image
          : "https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png",
        gender: gender ? gender : "male",
        city: city ? city : "cairo",
        phoneNumber: phoneNumber ? phoneNumber : "012345678",
      };
      axios({
        method: "post",
        url: "https://shopping-cart-data.onrender.com/users",
        data: newUser,
      })
        .then(() => {
          setSpringIngSubmitButton(true);
          setUpdateUsersAndProd((prev) => !prev);
        })
        .then(() => setTimeout(() => navigate("/login"), 1500));
    }
  };
  return (
    <div className="register-component">
      <Form noValidate onSubmit={(e) => handleRegisterSubmit(e)}>
        <Row className="mb-3">
          <FristNameInput
            handleOnChange={handleOnChange}
            firstName={firstName}
            setFirstName={setFirstName}
            checkFirstName={checkFirstName}
            setCheckFirstName={setCheckFirstName}
          />

          <LastNameInput
            handleOnChange={handleOnChange}
            lastName={lastName}
            setLastName={setLastName}
            checkLastName={checkLastName}
            setCheckLastName={setCheckLastName}
          />
        </Row>
        <UserNameInput
          handleOnChange={handleOnChange}
          userName={userName}
          setUserName={setUserName}
          checkUserName={checkUserName}
          setCheckUserName={setCheckUserName}
        />
        <EmailInput
          handleOnChange={handleOnChange}
          email={email}
          setEmail={setEmail}
          checkEmail={checkEmail}
          setCheckEmail={setCheckEmail}
        />
        <PasswordInput
          handleOnChange={handleOnChange}
          setPassword={setPassword}
          checkPassword={checkPassword}
          setCheckPassword={setCheckPassword}
          hidePass={hidePass}
          setHidePass={setHidePass}
        />

        <ImageInput
          handleOnChange={handleOnChange}
          image={image}
          setImage={setImage}
          checkImage={checkImage}
          setCheckImage={setCheckImage}
        />
        <GendCityPhoneInputs
          city={city}
          setCity={setCity}
          setGender={setGender}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />

        <Form.Group className="mb-4" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Agree Rules And Conditions" />
        </Form.Group>
        <SubmitToSave springIngSubmitButton={springIngSubmitButton} />
      </Form>
    </div>
  );
}

export default Register;
