import React from 'react';
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <a href="/gold">
            <img
            className="d-block w-100"
            src="https://www.jmbullion.com/images/slides/Slider-JMB-2021-ASE-and-AGE-Type-2-Creative-Pre-Sale-Gold-2.jpg"
            alt="American Gold Eagle"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/silver">
            <img
            className="d-block w-100"
            src="https://www.jmbullion.com/images/slides/Slider-JMB-2021-ASE-and-AGE-Type-2-Creative-Pre-Sale-2.jpg"
            alt="American Silver Eagle"
            />
          </a>
          <Carousel.Caption>
            <h3>Coins</h3>
            <p>Available in many designs.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="/silver">
            <img
            className="d-block w-100"
            src="https://www.jmbullion.com/images/slides/JMB-100-oz-Silver-Asahi-Florida-Bar-Sale.jpg"
            alt="100 oz Silver Bar"
            />
          </a>
          <Carousel.Caption>
            <h3>Silver Bars</h3>
            <p>1oz, 10oz, 100oz options available.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <h2>Our Products</h2>
        <Row>
          <Col xs={6} md={4}>
            <a href="/gold">
              <Image src="https://2ybaes-0497s6r6rnkm.cloudmaestro.com/aWecRuKVA/wp-content/themes/JMBullion/images/agold.png.pagespeed.ic.JHD6cXNs8O.webp" thumbnail />
            </a>
          </Col>
          <Col xs={6} md={4}>
            <a href="/silver">
              <Image src="https://zfodsq-0497s6r6rnkm.cloudmaestro.com/aWecRuKVA/wp-content/themes/JMBullion/images/asilver.png.pagespeed.ic.xeCMK654wW.webp" thumbnail />
            </a>
          </Col>
          <Col xs={6} md={4}>
            <a href="/platinum">
              <Image src="https://f5b8ui-0497s6r6rnkm.cloudmaestro.com/aWecRuKVA/wp-content/themes/JMBullion/images/aplatinum.png.pagespeed.ic.vD5SztLzm0.webp" thumbnail />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
