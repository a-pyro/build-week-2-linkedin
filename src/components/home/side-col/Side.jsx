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
        <PeopleAlsoViewed
          heading='People Also Viewed'
          sliceRange={[0, 5, 5, 15]}
        />
        <PeopleAlsoViewed
          heading='People you may know'
          sliceRange={[15, 20, 15, 25]}
        />
      </aside>
    </Col>
  );
};

export default Side;

