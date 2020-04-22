import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const CardData = (props) => {
  return (
    <Container>
      <Row>
        <Col md={6} lg={4}>
          <Card className="card-data cases" border="light">
            <Card.Header as="h3">Cases</Card.Header>
            <Card.Body>
              <Card.Text as="h4">{props.data.cases}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card className="card-data recovered" border="light">
            <Card.Header as="h3">Recovered</Card.Header>
            <Card.Body>
              <Card.Text as="h4">{props.data.recovered}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} lg={4}>
          <Card className="card-data deaths" bg="danger" border="light">
            <Card.Header as="h3">Deaths</Card.Header>
            <Card.Body>
              <Card.Text as="h4">{props.data.deaths}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardData;
