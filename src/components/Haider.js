import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';
import Form from 'react-bootstrap/Form';

export default function Haider() {
  const [show_login, setShow_login] = useState(false);

  const handleClose_login = (e) => {
    e.preventDefault();
    setShow_login(false);
  }
  const handleShow_login = (e) => {
    e.preventDefault();
    setShow_login(true);
  } 

  const [show_sign_in, setShow_sign_in] = useState(false);

  const handleClose_sign_in = (e) => {
    e.preventDefault();
    setShow_sign_in(false);
  } 
  const handleShow_sign_in = (e) => {
    e.preventDefault();
    setShow_sign_in(true);
  }


  return (
    <>
      <div class="fixed-top">
          <Navbar expand="lg" style={{ backgroundColor: "#535151" }} variant="dark">
            <Container>
              <Navbar.Brand><h1><strong>Chillist</strong></h1></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link href="http://localhost:3000">Home</Nav.Link>
                  <Nav.Link href="http://localhost:3000/Shop">Shop</Nav.Link>
                  <Nav.Link href="http://localhost:3000/Cutumer_car">Custumer Care</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Collapse className="justify-content-end">
              <Nav>
                  <Nav.Link onClick={handleShow_login}>Login</Nav.Link>
                  <Nav.Link onClick={handleShow_sign_in}>Sign In</Nav.Link>
              </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>


        <Modal show={show_login} centered>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleClose_login} method="POST">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="secondary" type="submit">
                Submit
              </Button>
              <Button variant="dark" onClick={handleClose_login}>
                Close
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>

        <Modal show={show_sign_in} centered>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleClose_sign_in}>
              <div className="form-row">
                <div className="form-group">
                  <label for="inputEmail4">Email</label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label for="inputPassword4">Password</label>
                  <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                </div>
              </div>
              <div className="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div className="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label for="inputCity">City</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div class="form-group">
                  <label for="inputZip">Zip</label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </div>
              <Button className="my-3" variant="secondary" type="submit">
                Submit
              </Button>
              <Button className="my-3" variant="dark" onClick={handleClose_sign_in}>
                Close
              </Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}


