import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PizzaCard from "./PizzaCard";

const Menu = () => {
  return (
    <section id="menu" className="bg-dark">
      <Container>
        <div className="text-center">
          <h3 className="text-primary my-3 py-5">
            Treat yourself with our Everyday Menu 
          </h3>
        </div>
        <Row>
             <Col md={6} lg={4}>
                <PizzaCard />
              </Col>
        </Row> 
      </Container>
    </section>
    
  );
  
};

export default Menu;
