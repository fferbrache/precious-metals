import React from 'react';
import { Nav, Card } from 'react-bootstrap';

export default function Footer() {
  return (
    <div>
      <Card.Footer>
        <Nav variant="tabs" defaultActiveKey="#link" className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="https://www.kitco.com/charts/livegold.html">Gold Price</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://www.kitco.com/charts/livesilver.html">Silver Price</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://www.kitco.com/charts/liveplatinum.html">Platinum Price</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Footer>
    </div>
  );
};
