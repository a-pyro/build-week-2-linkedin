import React from 'react';
import { Col } from 'react-bootstrap';
import ProfileStrength from './dumb.components/ProfileStrength';
import Dashboard from './dumb.components/Dashboard';
import Activity from './dumb.components/Activity';
import Interests from './dumb.components/Interests';
import Skills from './dumb.components/Skills';
import Education from './experiences/Education';
import PersonalDetails from './dumb.components/ProfileDetails';
// import Dashboard from 'components/home/main-component/Dashboard';

const Main = ({ user, userLogged, experiences }) => {
  // console.log('exp in main', experiences);
  return (
    <Col md={8}>
      <PersonalDetails user={user} />
      <ProfileStrength />
      <Dashboard />
      <Education
        //!trryexp experiences={experiences}
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
