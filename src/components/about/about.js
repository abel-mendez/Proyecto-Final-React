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
              <Card.Img
                variant="top"
                src="https://scontent.faep7-1.fna.fbcdn.net/v/t31.18172-8/13198613_113366325743216_4694809539530309603_o.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=VgCpqFqG_TgAX-45rzn&_nc_ht=scontent.faep7-1.fna&oh=9fce30eaaec69b3c9e7cd7c20ba3020b&oe=6195541E"
              />
              <Card.Body>
                <Card.Title>Leandro Andrés Carello</Card.Title>
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
                  target="_blank"
                  href="https://www.linkedin.com/in/leandro-carello-638957223/"
                >
                  <center>Linkedin Profile</center>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/86S3sqB.png" />
              <Card.Body>
                <Card.Title>Abel Mendez Villagra</Card.Title>
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
                  target="_blank"
                  href="https://www.linkedin.com/in/abel-m-villagra/"
                >
                  <center>Linkedin Profile</center>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
