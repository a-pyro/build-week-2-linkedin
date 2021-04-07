import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { AiFillQuestionCircle } from "react-icons/ai";

const Footer = function () {
  return (
    <FooterStyled fluid className="mx-0">
      <Row>
        <Col>
          <ul>
            <li>About</li>
            <li>Community Guidelines</li>
            <li>Privacy & Terms</li>
            <li>Sales Solution</li>
            <li>Saftey Career</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>Talent Solutions</li>
            <li>Marketing Solutions</li>
            <li>Advertising</li>
            <li>Small Business</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>
              <AiFillQuestionCircle />
              Questions?
            </li>
            <li>Manage your account and privacy</li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>Select language</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="footerText">
          LinkedIn Corporation <span>&#169;</span> 2021
        </Col>
      </Row>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled(Container)`
  background: #f4f4f4;
  color: #4b4b4b;

  & li {
    list-style-type: none;
    font-size: 0.7rem;
    padding: 0.3rem;
  }

  & .footerText {
    font-size: 0.8rem;
    font-weight: bold;
  }
`;
