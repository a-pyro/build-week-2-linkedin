
import React from 'react';
import { Col } from 'react-bootstrap';
import ProfileStrength from './ProfileStrength';
import Dashboard from './Dashboard';
import Activity from './Activity';
import Interests from './Interests';
import Skills from './Skills';
import Education from'./Education';
import PersonalDetails from './ProfileDetails';
// import Dashboard from 'components/home/main-component/Dashboard';

const Main = () => {
  return (
    <Col md={8}>
      <PersonalDetails />
      <ProfileStrength />
      <Dashboard />
      <Education />
      <Activity />
      <Interests />
      <Skills />
    </Col>

  );
};

export default Main;

