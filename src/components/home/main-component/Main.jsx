import React from "react";
import { Col } from "react-bootstrap";
import EducationComponent from "./Education";

const Main = () => {
  return (
    <>
      <Col style={mainStyle} md={8}>
        <EducationComponent />
      </Col>
    </>
  );
};

export default Main;

const mainStyle = {
  display: "flex",
};
