import React from "react";
import { Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <div className="d-flex w-100 p-5 bd-highlight justify-content-center">
        <Form>
          <Form.Label column="lg" lg={2}>
            Contact Us
          </Form.Label>
          <Form.Group className="mb-3" controlId="id-name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your Full Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Message" />
          </Form.Group>
          <Button variant="secondary">Submit</Button>
          <Button variant="danger">Cancel</Button>
        </Form>
      </div>
    </>
  );
}
