import React from "react";
import { Col } from "react-bootstrap";
import PersonalDetails from "./PersonalDetails";

const Main = () => {
  return (
    <>
      <Col style={mainStyle} md={8}>
        <PersonalDetails />
      </Col>
    </>
  );
};

export default Main;

const mainStyle = {
  display: "flex",
};
