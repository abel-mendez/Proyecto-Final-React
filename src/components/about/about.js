import React from "react";
import "./about.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function About() {
  return (
    <>
      <div class="cardsBody">
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
              <ListGroupItem>27 años</ListGroupItem>
              <ListGroupItem>Localidad: San Salvador de Jujuy</ListGroupItem>
              <ListGroupItem>Le gusta Zero Two :v</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link
                target="_blank"
                href="https://www.linkedin.com/in/leandro-carello-638957223/"
              >
                Linkedin Profile
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
              <ListGroupItem>24 años (creo xd)</ListGroupItem>
              <ListGroupItem>Localidad: San Salvador de Jujuy</ListGroupItem>
              <ListGroupItem>Carrea Mancos en el Lol</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link
                target="_blank"
                href="https://www.linkedin.com/in/abel-m-villagra/"
              >
                Linkedin Profile
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
