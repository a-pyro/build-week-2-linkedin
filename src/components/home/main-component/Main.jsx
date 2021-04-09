import React from 'react';
import { Col } from 'react-bootstrap';
import ProfileStrength from './ProfileStrength';
import Dashboard from './Dashboard';
import Activity from './Activity';
import Interests from './Interests';
import Skills from './Skills';
import Education from './Education';
import PersonalDetails from './ProfileDetails';
// import Dashboard from 'components/home/main-component/Dashboard';

const Main = ({ user, userLogged, experiences }) => {
  console.log('exp in main', experiences);
  return (
    <Col md={8}>
      <PersonalDetails user={user} />
      <ProfileStrength />
      <Dashboard />
      <Education
        experiences={experiences}
        userLogged={userLogged}
        user={user}
      />
      <Activity />
      <Interests />
      <Skills />
    </Col>
  );
};

export default Main;
