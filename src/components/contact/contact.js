import React from "react";
import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./contact.css";
const vacio = ({ email, name, message }) => {
  let formVacio = false;
  if (email === "" || name === "" || message === "") {
    formVacio = true;
  }
  return formVacio;
};
const validar = (event, error) => {
  let value = event.target.value;
  let name = event.target.name;
  if (value === "") {
    error[name] = "Este campo no puede estar vacio";
  } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
    error[name] = "Debe ingresar un mail valido";
  } else if (name === "name" && value.length < 8) {
    error[name] = "Debe ingresar al menos 8 caracteres";
  } else if (name === "message" && value.length < 10) {
    error[name] = "Debe ingresar mas de 10 caracteres";
  } else {
    error[name] = "";
  }
  let errores = true;
  if (error.email === "" && error.name === "" && error.message === "") {
    errores = false;
  }
  error.err = errores;
  return error;
};
export default function Contact() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    message: "",
    vacio: true,
  });
  const [errors, setErrors] = useState({
    email: "",
    name: "",
    message: "",
    err: false,
  });
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
      vacio: vacio(form),
    });
    setErrors(validar(event, errors));
  };
  return (
    <section>
      <Form className="contactForm">
        <div className="transparent-container text-center ">
          <Form.Label className="mb-3 fs-5">Contact Us</Form.Label>
          <Form.Group className="mb-3" controlId="id-name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Your Full Name"
              onChange={(event) => handleChange(event)}
            />
            {errors.name ? (
              <div className="alert alert-danger fs-6"> {errors.name}</div>
            ) : (
              false
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="name@example.com"
              onChange={(event) => handleChange(event)}
            />
            {errors.email ? (
              <div className="alert alert-danger">{errors.email}</div>
            ) : (
              false
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              name="message"
              as="textarea"
              onChange={(event) => handleChange(event)}
              rows={5}
              cols={35}
              placeholder="Message"
            />
            {errors.message ? (
              <div className="alert alert-danger">{errors.message}</div>
            ) : (
              false
            )}
          </Form.Group>
          <div>
            <Button
              className="submit"
              variant="success"
              disabled={errors.err || form.vacio}
            >
              <NavLink className="text-white text-decoration-none" to="/home">
                Submit
              </NavLink>
            </Button>
            <NavLink to="/home">
              <Button className="Cancel" variant="danger">
                Cancel
              </Button>
            </NavLink>
          </div>
        </div>
      </Form>
    </section>
  );
}
