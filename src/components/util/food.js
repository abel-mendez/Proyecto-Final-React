import React from "react";
import { Card } from "react-bootstrap";
import "./food.css";
const Food = ({ image = "https://i.imgur.com/1iQw2NN.jpeg", label }) => {
  return (
    <Card
      className=" image m-auto shadow-lg"
      text="light"
      border="warning"
      bg="success"
      style={{ width: "18rem", borderRadius: 30 }}
    >
      <Card.Img
        variant="top"
        src={image}
        style={{ width: "18rem", borderRadius: 30 }}
      />
      <Card.Body>
        <Card.Title className="text-center">{label}</Card.Title>
      </Card.Body>
    </Card>
  );
};
export default Food;
