import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StayHomeImage from "../assets/Illustration_15.png";

const Title = () => {
  return (
    <section id="title">
      <Container>
        <Row>
          <Col className="title-text" md={12} lg={4}>
            <h1>CORONA</h1>
            <p>
              Stay <span></span>.
            </p>
          </Col>
          <Col className="title-image" md={12} lg={8}>
            <img alt="stay-home" src={StayHomeImage}></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Title;
