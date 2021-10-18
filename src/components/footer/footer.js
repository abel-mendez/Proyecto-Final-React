import React from "react";
import { NavLink, Route } from "react-router-dom";
import Contact from "../contact/contact";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="bg-success d-flex align-self-center justify-content-between me-auto my-lg-0 flex-grow-0 p-2">
        <div className="align-self-center">
          <div>
            <h6>Leandro Carello</h6>
          </div>
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="ms-2"
            href="https://www.facebook.com/"
          >
            <img
              className="logo"
              alt="facebook"
              src="https://raw.githubusercontent.com/abel-mendez/responsive_portafolio/0a8506066c617edae6003310ac0745e47b3c5f50/images/facebook.svg"
            ></img>
          </a>
          <a
            className="ms-2"
            rel="noreferrer noopener"
            href="https://www.instagram.com/"
          >
            <img
              className="logo"
              alt="instagram"
              src="https://raw.githubusercontent.com/abel-mendez/responsive_portafolio/0a8506066c617edae6003310ac0745e47b3c5f50/images/instagram.svg"
            ></img>
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="ms-2"
            href="https://github.com/"
          >
            <img
              className="logo"
              alt="github"
              src="https://raw.githubusercontent.com/abel-mendez/responsive_portafolio/0a8506066c617edae6003310ac0745e47b3c5f50/images/github.svg"
            ></img>
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="ms-2"
            href="https://twitter.com/"
          >
            <img
              alt="twitter"
              className="logo"
              src="https://raw.githubusercontent.com/abel-mendez/responsive_portafolio/0a8506066c617edae6003310ac0745e47b3c5f50/images/twitter.svg"
            ></img>
          </a>
        </div>
        <div className="align-self-center">
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            className=" col-12 col-md-6 col-lg-4 mb-3 align-self-center"
            exact
            to="/contact"
          >
            Contact Us
          </NavLink>
        </div>
        <div className="align-self-center">
          <div>
            <h6>Abel Mendez</h6>
          </div>
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="ms-2"
            href="https://www.facebook.com/"
          >
            <img
              alt="facebook"
              className="logo"
              src="https://raw.githubusercontent.com/abel-mendez/responsive_portafolio/0a8506066c617edae6003310ac0745e47b3c5f50/images/facebook.svg"
            ></img>
          </a>
          <a
            className="ms-2"
            rel="noreferrer noopener"
            href="https://www.instagram.com/"
          >
            <img
              className="logo"
              alt="instagram"
              src="https://raw.githubusercontent.com/abel-mendez/responsive_portafolio/0a8506066c617edae6003310ac0745e47b3c5f50/images/instagram.svg"
            ></img>
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="ms-2"
            href="https://github.com/"
          >
            <img
              className="logo"
              alt="github"
              src="https://raw.githubusercontent.com/abel-mendez/responsive_portafolio/0a8506066c617edae6003310ac0745e47b3c5f50/images/github.svg"
            ></img>
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            className="ms-2"
            href="https://twitter.com/"
          >
            <img
              className="logo"
              alt="twitter"
              src="https://raw.githubusercontent.com/abel-mendez/responsive_portafolio/0a8506066c617edae6003310ac0745e47b3c5f50/images/twitter.svg"
            ></img>
          </a>
        </div>
      </div>
    </>
  );
}
