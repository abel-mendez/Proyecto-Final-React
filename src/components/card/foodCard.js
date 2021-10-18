import React from "react";
import { Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../util/loading";
import axios from "axios";

export default function FoodCard() {
  const [buscado, setBuscado] = useState();
  const params = useParams();
  const buscar = async (params) => {
    let buscado = await axios.get(
      "https://api.edamam.com/api/food-database/v2/parser?app_id=ea9ed3c9&app_key=f17a5f9de1b1a29ec890b8271f82bcfe&ingr=" +
        params.id
    );
    setBuscado(buscado.data.hints[0].food);
    console.log(buscado.data.hints[0].food);
  };

  useEffect(() => {
    buscar(params);
  }, []);

  if (buscado === undefined) {
    return (
      <div className="loading">
        <Loading></Loading>
      </div>
    );
  }
  return (
    <div>
      <div className=" p-5 d-flex justify-content-center">
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={
              buscado.image ? buscado.image : "https://i.imgur.com/1iQw2NN.jpg"
            }
          />
          <Card.Body>
            <Card.Title>{buscado.label}</Card.Title>
            <Card.Text>Description</Card.Text>
            <a href="/home">
              <Button variant="primary">Back</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
