import React from "react";
import { Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../util/loading";
import axios from "axios";
import "./foodCards.css";

export default function FoodCard() {
  const [buscado, setBuscado] = useState();
  const params = useParams();
  const buscar = async (params) => {
    let buscado = await axios.get(
      "https://api.edamam.com/api/food-database/v2/parser?app_id=ea9ed3c9&app_key=f17a5f9de1b1a29ec890b8271f82bcfe&ingr=" +
        params.id
    );
    setBuscado(buscado.data.hints[0].food);
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
    <section>
      <div className="transparent-container">
        <div className="cardcitas p-5 d-flex justify-content-center">
          <Card
            text="light"
            border="warning"
            bg="success"
            style={{ width: "20rem", borderRadius: 30 }}
          >
            <Card.Img
              variant="top"
              style={{ width: "20rem", borderRadius: 30 }}
              src={
                buscado.image
                  ? buscado.image
                  : "https://i.imgur.com/1iQw2NN.jpg"
              }
            />
            <Card.Body className="text-center">
              <Card.Title>
                <h1>{buscado.label} :</h1>
              </Card.Title>
              <Card.Text>
                <h5>
                  Calories: {buscado.nutrients["ENERC_KCAL"].toFixed(2)} Kcal
                </h5>
              </Card.Text>
              <Card.Text>
                <h5>Protein: {buscado.nutrients["PROCNT"].toFixed(2)} gr</h5>
              </Card.Text>
              <Card.Text>
                <h5>Fat: {buscado.nutrients["FAT"].toFixed(2)} gr</h5>
              </Card.Text>
              <a href="javascript: history.go(-1)">
                <Button variant="primary">Back</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}
