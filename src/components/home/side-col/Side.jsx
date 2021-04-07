import React from 'react';
import { Col } from 'react-bootstrap';
import AdOffer from './AdOffer';
import EditPublicProfile from './EditPublicProfile';
import PeopleAlsoViewed from './PeopleAlsoViewed';

const Side = ({ user: { image } }) => {
  return (
    <Col md={4}>
      <aside>
        <EditPublicProfile />
        <AdOffer image={image} />
        <PeopleAlsoViewed />
      </aside>
    </Col>
  );
};

export default Side;
