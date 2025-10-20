"use client";

import { Container, Row, Col, Card } from "react-bootstrap";

const Info = () => {
  return (
    <Container id="info" className="mt-5">
      <h2>Airport Information</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Transportation</Card.Title>
              <Card.Text>
                Find information about parking, rental cars, and public transportation.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Shopping & Dining</Card.Title>
              <Card.Text>
                Discover the shops, restaurants, and cafes at SFO.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Services</Card.Title>
              <Card.Text>
                Learn about the services available at the airport, including lounges and Wi-Fi.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;
