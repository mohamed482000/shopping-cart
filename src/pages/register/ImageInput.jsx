import React from "react";
import Form from "react-bootstrap/Form";

function ImageInput({
  handleOnChange,
  image,
  setImage,
  checkImage,
  setCheckImage,
}) {
  return (
    <Form.Group className="mb-4">
      <Form.Control
        value={image}
        onChange={(e) => handleOnChange(e, setImage, setCheckImage)}
        type="text"
        placeholder="Enter your image"
      />
      {checkImage ? (
        ""
      ) : (
        <Form.Text className=" text-danger">
          please your image shoud start with http
        </Form.Text>
      )}
    </Form.Group>
  );
}

export default ImageInput;
