import React from "react";
import { useParams } from "react-router";
import ButtonCheck from "../util/buttonCheck";
import Food from "../util/food";
import { useState, useEffect } from "react";
import { getFoodApi } from "../api/getFoodApi";
import Loading from "../util/loading";
import "./home.css";
const ordenar = (orden, comidas) => {
  if (orden === 1) {
    comidas.sort((a, b) => {
      if (a.food.label > b.food.label) {
        return 1;
      }
      if (a.food.label < b.food.label) {
        return -1;
      }
      return 0;
    });
  } else {
    comidas.sort((a, b) => {
      if (a.food.label < b.food.label) {
        return 1;
      }
      if (a.food.label > b.food.label) {
        return -1;
      }
      return 0;
    });
  }
  return comidas;
};
const Home = () => {
  const [comidas, setComidas] = useState();
  const [orden, setOrden] = useState(-1);
  const [pagina, setPagina] = useState(0);
  useEffect(() => {
    buscar("rice");
  }, []);
  const buscar = async (params) => {
    let buscado = await getFoodApi.get(params);
    setComidas(buscado.data.hints);
  };
  const handleChange = (value) => {
    if (orden != value) {
      let nuevo = ordenar(value, comidas);
      setComidas(nuevo);
      setOrden(value);
    }
  };
  const handlePrevious = () => {
    if (pagina > 0) {
      setPagina(pagina - 6);
    }
  };
  const handleNext = () => {
    console.log(comidas.length);
    if (comidas.length - 6 > pagina) {
      setPagina(pagina + 6);
      console.log("hola");
    }
  };
  if (comidas === undefined) {
    return (
      <div className="loading">
        <Loading></Loading>
      </div>
    );
  }
  return (
    <div className="container p-5 align-center">
      <div className="d-flex justify-content-between">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <p
            onClick={() => {
              handleChange(0);
            }}
          >
            <ButtonCheck key="down" id="down" name="Down" />
          </p>
          <p
            onClick={() => {
              handleChange(1);
            }}
          >
            <ButtonCheck key="up" id="up" name="Up" />
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              handlePrevious();
            }}
            className="btn btn-outline-success"
          >
            previous
          </button>
          <button
            onClick={() => {
              handleNext();
            }}
            className="btn btn-outline-success"
          >
            next
          </button>
        </div>
      </div>

      <hr></hr>
      <div className="row">
        {comidas.slice(pagina, pagina + 6).map((element) => {
          return (
            <Food
              key={element.food.foodId}
              image={element.food.image}
              label={element.food.label}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
