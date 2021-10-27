import React from "react";
import "./about.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function About() {
  return (
    <section>
      <div class="cardsBody">
        <div class="transparent-container-about">
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/iEDMFu7.png" />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <center>
                    <h3>Leandro Andrés Carello</h3>
                  </center>
                </Card.Title>
                <Card.Text>
                  Estudiante Analista Programador Universitario - UNJU
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Age: 27</ListGroupItem>
                <ListGroupItem>City: San Salvador de Jujuy</ListGroupItem>
                <ListGroupItem>
                  Estudiante autodidacta con conocimientos en C#, C++, Java,
                  Android, HTML, Javascript y Css.
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link
                  className="text-decoration-none"
                  target="_blank"
                  href="https://www.linkedin.com/in/leandro-carello-638957223/"
                >
                  <center>
                    <h4>Linkedin Profile</h4>
                  </center>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/ubxTv9H.png" />
              <Card.Body>
                <Card.Title>
                  <center>
                    <h3>Abel Mendez Villagra</h3>
                  </center>
                </Card.Title>
                <Card.Text>
                  Estudiante Analista Programador Universitario - UNJU
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Age: 24</ListGroupItem>
                <ListGroupItem>City: San Salvador de Jujuy</ListGroupItem>
                <ListGroupItem>
                  Actualmente tomando cursos de Programacion Web para mejorar
                  mis habilidades como programador.
                </ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link
                  className="text-decoration-none"
                  target="_blank"
                  href="https://www.linkedin.com/in/abel-m-villagra/"
                >
                  <center>
                    <h4>Linkedin Profile</h4>
                  </center>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
