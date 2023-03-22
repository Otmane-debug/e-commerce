

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';
import Form from 'react-bootstrap/Form';

export default class  Haider extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: '',
      address1: '',
      address2: '',
      city: '',
      zip: '',
      show_sign_in: false, 
      show_login: false, 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose_login = this.handleClose_login.bind(this);
    this.handleShow_login = this.handleShow_login.bind(this);
    this.handleClose_sign_in = this.handleClose_sign_in.bind(this);
    this.handleShow_sign_in = this.handleShow_sign_in.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8000/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(response => {
        if (response.ok) {
          // User created successfully
          console.log('User created successfully!');
        } else {
          // Error creating user
          console.log('Error creating user!');
        }
      })
      .catch(error => {
        console.error(error);
      });

      this.handleClose_sign_in();
  }

  handleClose_login(e) {
    this.setState({ show_login: false });
  }
  
  handleShow_login(e) {
    this.setState({ show_login: true });
  }
  
  handleClose_sign_in(e) {
    this.setState({ show_sign_in: false });
  }
  
  handleShow_sign_in(e) {
    this.setState({ show_sign_in: true });
  }



  render() 
    {


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
                    <Nav.Link onClick={this.handleShow_login}>Login</Nav.Link>
                    <Nav.Link onClick={this.handleShow_sign_in}>Sign In</Nav.Link>
                </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>


          <Modal show={this.state.show_login} onHide={this.handleClose_login} centered>
            <Modal.Header>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.handleSubmit} method="POST">
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
                <Button variant="dark" onClick={this.handleClose_login}>
                  Close
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.show_sign_in} onHide={this.handleClose_sign_in} centered>
            <Modal.Header>
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label for="inputEmail4">UserName</label>
                      <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="form-control" id="inputUserName" placeholder="Username" />
                  </div>  
                  <div className="form-group">
                    <label for="inputPassword4">Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="inputPassword" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <label for="inputEmail4">Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="inputEmail" placeholder="Email" />
                  </div>
                  <div className="form-group">
                  <label for="inputEmail4">First Name</label>
                    <input type="text" name='first_name' value={this.state.first_name} onChange={this.handleChange} className="form-control" id="inputFirstName" placeholder="First Name" />
                  </div>
                  <div className="form-group">
                    <label for="inputEmail4">Last Name</label>
                      <input type="text" name='last_name' value={this.state.last_name} onChange={this.handleChange} className="form-control" id="inputLastName" placeholder="Last Name" />
                    </div>
                  </div>  
                  <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" name='address1' value={this.state.address1} onChange={this.handleChange} className="form-control" id="inputAddress" placeholder="1234 Main St" />
                  </div>
                  <div className="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" name='address2' value={this.state.address2} onChange={this.handleChange} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                  </div>
                  <div className="form-row">
                  <div className="form-group">
                    <label for="inputCity">City</label>
                    <input type="text" name='city' value={this.state.city} onChange={this.handleChange} className="form-control" id="inputCity" />
                  </div>
                  <div class="form-group">
                    <label for="inputZip">Zip</label>
                    <input type="text" name='zip' value={this.state.zip} onChange={this.handleChange} className="form-control" id="inputZip" />
                  </div>
                </div>
                <Button className="my-3" variant="secondary" type="submit">
                  Submit
                </Button>
                <Button className="my-3" variant="dark" onClick={this.handleClose_sign_in}>
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
}


