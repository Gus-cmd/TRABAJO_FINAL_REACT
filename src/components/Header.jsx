import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Cart, CartIcon } from './Cart';

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShow = () => setShowCart(true);
  const handleClose = () => setShowCart(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="#home">GusShop | Tech</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Laptops">Laptops</Nav.Link>
              <Nav.Link href="#Accesorios">Accesorios</Nav.Link>
              <Nav.Link href="#">Iniciar Sesion</Nav.Link>
            </Nav>
            <Form className="d-flex ms-auto search-form">
              <FormControl
                type="search"
                placeholder="Buscar productos"
                className="me-2"
                aria-label="Buscar"
              />
              <Button variant="outline-light">Buscar</Button>
            </Form>
            <CartIcon handleShow={handleShow} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart show={showCart} handleClose={handleClose} />
    </>
  );
};

export default Header;
