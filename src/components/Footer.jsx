import React from "react";
import { Container, Dropdown, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { AiFillQuestionCircle } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import logo from "./linkedIn-logo.png";

const Footer = function () {
  return (
    <FooterStyled fluid className="mx-0">
      <Row>
        <ul>
          <li>
            <img src={logo} alt="logo" />
          </li>
        </ul>
      </Row>
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
              <AiFillQuestionCircle className="icons" />
              Questions?
            </li>
            <li>
              <GoGear className="icons" />
              Manage your account and privacy
            </li>
          </ul>
        </Col>
        <Col>
          <ul>
            <li>
              Select Language
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  English (English)
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ fontSize: "0.9em" }}>
                  <Dropdown.Item href="#/action-1">French</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">German</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Italian</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="footerText">
          <ul>
            <li>
              LinkedIn Corporation <span>&#169;</span> 2021
            </li>
          </ul>
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

  & #dropdown-basic {
    font-size: 0.7rem;
    border: 1px solid #4b4b4b;
    align-items: left;
  }
  & img {
    width: 90px;
    margin: 5px 14px;
  }

  & .icons {
    font-size: 1.8em;
    margin-right: 4px;
  }
`;
