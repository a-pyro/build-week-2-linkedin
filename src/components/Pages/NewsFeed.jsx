import React, { Component } from "react";
import { Container, Col, Card, Row } from "react-bootstrap";
import styled from "styled-components";

export default class NewsFeed extends Component {
  render() {
    return (
      <ContainerStyled fluid className="card">
        <div style={{ textAlign: "center" }}>
          Investing and Trading Investing in Financial Education is Good.
          Earnings are Better. Learn More.
        </div>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card style={{ width: "28rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </ContainerStyled>
    );
  }
}

const ContainerStyled = styled(Container)`
  background: #f4f4f4;
  color: #4b4b4b;
  border: none;

  & div {
    padding: 10px;
  }
`;
