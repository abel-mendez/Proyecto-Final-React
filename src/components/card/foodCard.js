import React from "react";
import { Card, Button } from "react-bootstrap";
import Food from "../util/food";

export default function FoodCard() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src="https://i.imgur.com/1iQw2NN.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Food description</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
