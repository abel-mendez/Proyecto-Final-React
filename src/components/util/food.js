import React from "react";
import { Card } from "react-bootstrap";
const Food = ({ image, label }) => {
  return (
    <div className=" col-12 col-md-6 col-lg-4 mb-3 ">
      <Card style={{ width: "18rem" }} className="m-auto shadow-lg">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="text-center">{label}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Food;
