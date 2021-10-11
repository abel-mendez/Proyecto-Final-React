import React from "react-dom";
import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function Header() {
  const [form, setForm] = useState("");
  const handleChange = (event) => {
    setForm(event.target.value);
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
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(event) => {
                  handleChange(event);
                }}
              />
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
