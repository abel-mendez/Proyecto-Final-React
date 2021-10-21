import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import ButtonCheck from "../util/buttonCheck";
import Food from "../util/food";
import { useState, useEffect } from "react";
import Loading from "../util/loading";
import axios from "axios";
import "./home.css";
import { Navbar, Container } from "react-bootstrap";
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
  const [comidas, setComidas] = useState([]);
  const [orden, setOrden] = useState(-1);
  const [pagina, setPagina] = useState(1);
  const [cantidad, setCantidad] = useState(6);
  const [search, setSearch] = useState("water");
  const [category, setCategory] = useState("generic-foods");
  const params = useParams();

  useEffect(() => {
    if (params.search !== undefined) {
      setSearch(params.search);
    } else {
      setSearch("water");
    }
  }, [params]);
  useEffect(() => {
    buscar(search);
  }, [search, category]);

  const buscar = async (params) => {
    let buscado = await axios.get(
      "https://api.edamam.com/api/food-database/v2/parser?app_id=ea9ed3c9&app_key=f17a5f9de1b1a29ec890b8271f82bcfe&ingr=" +
        params +
        "&category=" +
        category
    );
    setComidas(buscado.data.hints);
  };
  const handleChange = (value) => {
    if (orden !== value) {
      let nuevo = ordenar(value, comidas);
      setComidas(nuevo);
      setOrden(value);
    }
  };
  const handlePrevious = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };
  const handleNext = () => {
    if (comidas.length / cantidad > pagina) {
      setPagina(pagina + 1);
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
    <div className=" container p-5 align-center">
      <Navbar bg="white" variant="light" expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className=" container align-center">
            <div className="row">
              <div className="col-3">Order:</div>
              <div className="col-3">Type:</div>
              <div className="col-3 text-center">Quantity:</div>
              <div className="col-3 text-center">Pages:</div>
            </div>
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
                  <ButtonCheck type="button" key="down" id="down" name="Down" />
                </p>
                <p
                  onClick={() => {
                    handleChange(1);
                  }}
                >
                  <ButtonCheck type="button" key="up" id="up" name="Up" />
                </p>
              </div>
              <div>
                <select
                  onChange={(event) => {
                    setCategory(event.target.value);
                  }}
                  className="form-select"
                >
                  <option value="generic-foods">Generic Foods</option>
                  <option value="generic-meals">Generic Meals</option>
                  <option value="packaged-foods">Packaged Foods</option>
                  <option value="fast-foods">Fast Foods</option>
                </select>
              </div>
              <div>
                <select
                  onChange={(event) => {
                    setCantidad(event.target.value);
                  }}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="6">6 foods</option>
                  <option value="9">9 foods</option>
                  <option value="12">12 foods</option>
                  <option value="15">15 foods</option>
                  <option value="18">18 foods</option>
                </select>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    handlePrevious();
                  }}
                  className="btn btn-outline-success"
                >
                  previous
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleNext();
                  }}
                  className="btn btn-outline-success"
                >
                  next
                </button>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
      <hr></hr>
      <div className="row">
        {comidas
          //compara si el index coincide con la primera coincidencia del item
          .filter((item, index) => {
            return (
              //busca el index  de la primera coincidencia con el elemento encontrado
              comidas.indexOf(
                //Encuentras el elemento con el id pasado pasado por el filter
                comidas.find(
                  (element) => item.food.foodId === element.food.foodId
                )
              ) === index
            );
          })
          .slice((pagina - 1) * cantidad, pagina * cantidad)
          .map((element) => {
            return (
              <NavLink
                className=" col-12 col-md-6 col-lg-4 mb-3 "
                exact
                key={element.food.foodId}
                to={`/food/${element.food.foodId}`}
              >
                <Food image={element.food.image} label={element.food.label} />
              </NavLink>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
