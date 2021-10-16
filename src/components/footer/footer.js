import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="bg-success fixed-bottom d-flex justify-content-between me-auto my-lg-0 flex-grow-0 p-2">
        <div>
          <div className="bg-primary">Leandro Carello</div>
          <div>
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
        </div>
        <div>
          {" "}
          <NavLink className=" col-12 col-md-6 col-lg-4 mb-3 " to={`/about/`}>
            Contact Us
          </NavLink>
        </div>
        <div>
          Abel Mendez
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
