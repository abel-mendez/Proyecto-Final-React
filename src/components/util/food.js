import React from "react";
import { Card } from "react-bootstrap";
import "./food.css";
const Food = ({ image = "https://i.imgur.com/1iQw2NN.jpeg", label }) => {
  return (
    <Card style={{ width: "18rem" }} className=" image m-auto shadow-lg">
      <Card.Img variant="top" src={image} />
      <Card.Body style={{}}>
        <Card.Title className="text-center">{label}</Card.Title>
      </Card.Body>
    </Card>
  );
};
export default Food;
