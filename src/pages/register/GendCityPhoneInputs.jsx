import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function GendCityPhoneInputs({
  city,
  setCity,
  setGender,
  phoneNumber,
  setPhoneNumber,
}) {
  return (
    <Row className="mb-4">
      <Form.Group as={Col}>
        <Form.Control
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Enter your city"
        />
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Select
          onChange={(e) => setGender(e.target.value)}
          defaultValue="Choose..."
        >
          <option>male</option>
          <option>female</option>
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col}>
        <Form.Control
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="text"
          placeholder="Enter your Phone Number"
        />
      </Form.Group>
    </Row>
  );
}

export default GendCityPhoneInputs;
