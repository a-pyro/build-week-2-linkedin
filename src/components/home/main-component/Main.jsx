import React from 'react';
import { Col } from 'react-bootstrap';
import PersonalDetails from './PersonalDetails';
const Main = () => {
  return (
    <Col style={mainStyle} md={8}>
      <h1>Main Component</h1>
    </Col>
  );
};

export default Main;

const mainStyle = {
  background: '#7a7af0',
};
