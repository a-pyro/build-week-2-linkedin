import React from 'react';
import { Col } from 'react-bootstrap';
import ProfileStrength from './ProfileStrength';

const Main = () => {
  return (
    <Col style={mainStyle} md={8}>
      <ProfileStrength />
    </Col>
  );
};

export default Main;

const mainStyle = {
  background: '#7a7af0',
};
