import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center" >
        <Col lg={8}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../assets/one.jpeg")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Margherita</h3>
                <p> A classic favorite, the Margherita pizza features a tangy tomato sauce and a deliciously tangy single cheese topping. It’s simple yet incredibly satisfying!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../assets/two.jpeg")}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Cheese Pizza</h3>
                <p> It’s loaded with four different varieties of cheese, including a spicy kick from ghost pepper cheese!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../assets/three.jpeg")}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Pepporoni</h3>
                <p>Pepperoni pizza is a classic and beloved dish that combines the simplicity of pizza with the bold flavors of spicy pepperoni</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <h2 className="display-5 mt-3">Pizzas for Every Occasion!</h2>
       
      </div>
    </Container>
  );
};

export default Banner;
