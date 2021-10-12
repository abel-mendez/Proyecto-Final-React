import React from "react-dom";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { buscadorApi } from "../api/buscadorApi";
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
    let buscado = await buscadorApi.get(form);
    setSearch(buscado.data);
  };
  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg">
        <Container fluid>
          <NavLink exact to="/">
            <Navbar.Brand href="#">
              <img
                src="https://i.imgur.com/vVrRswJ.png"
                className="brand"
              ></img>
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <input
                class="form-control"
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
              <NavLink exact to={`/${form}`}>
                <Button variant="light">Search</Button>
              </NavLink>
            </Form>
            <Nav
              className="me-auto my-2 my-lg-0 flex-grow-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="nav-link " exact to="/">
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
