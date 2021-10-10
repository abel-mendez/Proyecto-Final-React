import React from "react-dom";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>          
          <Navbar.Brand href="#"><img src='https://i.imgur.com/vVrRswJ.png' className='brand'></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav
              className="me-auto my-2 my-lg-0 flex-grow-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
            </Nav>            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
