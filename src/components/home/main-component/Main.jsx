import React from 'react';
import { Col } from 'react-bootstrap';
import ProfileStrength from './ProfileStrength';
import Dashboard from './Dashboard';
import Activity from './Activity';
// import Dashboard from 'components/home/main-component/Dashboard';

const Main = () => {
  return (
    <Col md={8}>
      <ProfileStrength />
      <Dashboard />
      <Activity />
    </Col>
  );
};

export default Main;
