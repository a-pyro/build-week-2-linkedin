import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Footer = function () {
  return (
    <Container fluid style={{ background: "#f4f4f4", color: "#4b4b4b" }}>
      <Row>
        <Col>
          <ul>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          LinkedIn Corporation <span>&#169;</span> 2021
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
