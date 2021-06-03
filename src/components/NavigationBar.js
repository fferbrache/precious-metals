import React from 'react';
import { Navbar, Form, Button, Nav } from 'react-bootstrap';

export default function NavigationBar() {
  return (
    <div>
      <Navbar bg="light" variant="light">
      <Navbar.Brand href="/home">Stacker</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/products">Products</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="outline-info" href="/cart">View Cart</Button>
    </Form>
      </Navbar>
      
    </div>
  )
}
