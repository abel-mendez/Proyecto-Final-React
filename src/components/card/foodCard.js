import React from "react";
import { Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getFoodApi } from "../api/getFoodApi";
import { useParams } from "react-router";
import Food from "../util/food";
import Loading from "../util/loading";

export default function FoodCard() {
  //pido el parametro
  /*const [foodInfo, setFoodInfo] = useState([]);
  useEffect(() => {
    setFoodInfo(getFoodApi.app_id)
  });*/

  const params = useParams();

  useEffect(() => {
    getFoodApi.get(params.id).then((data) => console.log(data));
  }, []);

  console.log(params);
  // const [buscado, setBuscado] = useState(); //Hook
  // const buscar = async (params) => {

  //   setBuscado(resp);
  // };

  // if (buscado === undefined) {
  //   return (
  //     <div className="loading">
  //       <Loading></Loading>
  //     </div>
  //   );
  // }

  //busco en la api
  //muestro el componente
  //muestro el loading

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src="https://i.imgur.com/1iQw2NN.jpg" />
          <Card.Body>
            <Card.Title>asd</Card.Title>
            <Card.Text>Food description</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
