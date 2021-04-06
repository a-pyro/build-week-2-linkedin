import React from 'react';
import { Col } from 'react-bootstrap';

const Side = () => {
  return (
    <Col style={sideStyle} md={4}>
      <h1>side Component</h1>
    </Col>
  );
};

export default Side;

const sideStyle = {
  background: '#6bff7e',
};
