import React from "react-dom";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import axios from "axios";
import { NavLink } from "react-router-dom";
export default function Header() {
  const [form, setForm] = useState("");
  const [search, setSearch] = useState([]);
  const handleChange = (event) => {
    setForm(event.target.value);
  };
  useEffect(() => {
    buscar();
  }, [form]);
  const buscar = async () => {
    let buscado = await axios.get(
      "https://api.edamam.com/auto-complete?app_id=ea9ed3c9&app_key=f17a5f9de1b1a29ec890b8271f82bcfe&q=" +
        form
    );
    setSearch(buscado.data);
  };
  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg">
        <Container fluid>
          <NavLink className="nav-link img-fluid" exact to="/">
            <img src="https://i.imgur.com/vVrRswJ.png" className="brand"></img>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <input
                className="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search..."
                onChange={(event) => {
                  handleChange(event);
                }}
              />
              <datalist id="datalistOptions">
                {search.map((element) => {
                  return <option key={element} value={element} />;
                })}
              </datalist>
              <NavLink exact to={`/home/${form}`}>
                <Button variant="light">Search</Button>
              </NavLink>
            </Form>
            <Nav
              className="me-auto my-2 my-lg-0 flex-grow-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="nav-link " exact to="/home">
                Home
              </NavLink>
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
