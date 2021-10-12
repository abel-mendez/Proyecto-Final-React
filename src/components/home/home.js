import React from "react";
import { useParams } from "react-router";
import ButtonGroup from "../util/buttonGroup";
import Food from "../util/food";
import { useState, useEffect } from "react";
import { getFoodApi } from "../api/getFoodApi";
import Loading from "../util/loading";
import "./home.css";
const Home = () => {
  const [comidas, setComidas] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      buscar("rice");
    }, 1000);
  }, []);
  const buscar = async (params) => {
    let buscado = await getFoodApi.get(params);
    setComidas(buscado.data.hints);
    console.log(buscado.data.hints);
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
      <ButtonGroup />
      <hr></hr>
      <div className="row">
        {comidas.map((element) => {
          return <Food image={element.food.image} label={element.food.label} />;
        })}
      </div>
    </div>
  );
};

export default Home;
