import React from 'react';
import { Col } from 'react-bootstrap';
import AdOffer from './AdOffer';
import EditPublicProfile from './EditPublicProfile';

const Side = ({ user: { image } }) => {
  return (
    <Col md={4}>
      <EditPublicProfile />
      <AdOffer image={image} />
    </Col>
  );
};

export default Side;
