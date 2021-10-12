import React from "react";
import { useParams } from "react-router";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getFoodApi } from "../api/getFoodApi";
import Loading from "../util/loading";
import "./home.css";
const Home = () => {
  const [comidas, setComidas] = useState([]);
  useEffect(() => {
    buscar("rice");
  }, []);
  const buscar = async (params) => {
    let buscado = await getFoodApi.get(params);
    setComidas(buscado.data.hints);
  };
  if (comidas.length === 0) {
    return (
      <div className="loading">
        <Loading></Loading>
      </div>
    );
  }
  return (
    <div className="container p-5 align-center">
      <div className="row">
        {comidas.map((element) => {
          return (
            <div className=" col-12 col-md-6 col-lg-4 mb-3 ">
              <Card style={{ width: "18rem" }} className="m-auto shadow-lg">
                <Card.Img variant="top" src={element.food.image} />
                <Card.Body>
                  <Card.Title className="text-center">
                    {element.food.label}
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
