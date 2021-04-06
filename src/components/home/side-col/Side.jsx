import React from 'react';
import { Col } from 'react-bootstrap';

const Side = () => {
  return (
    <Col style={sideStyle} md={3}>
      <h1>side Component</h1>
    </Col>
  );
};

export default Side;

const sideStyle = {
  background: '#6bff7e',
};
