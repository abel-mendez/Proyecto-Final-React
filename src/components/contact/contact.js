import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="id-name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Message" />
        </Form.Group>
        <Button variant="secondary">Submit</Button>
        <Button variant="danger">Cancel</Button>
      </Form>
    </>
  );
}
