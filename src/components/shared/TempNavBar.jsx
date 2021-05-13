import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Container,
} from 'react-bootstrap';
import { Link, withRouter, useHistory } from 'react-router-dom';

const TempNavBar = ({ location }) => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <Navbar bg='light' expand='lg' className='mb-3'>
      <Container>
        <Link to='/newsfeed' className='navbar-brand pb-2 font-weight-bold'>
          Fakedin
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            {/* <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Me</Nav.Link> */}
            <Link
              className={`p-0 m-2 nav-link ${
                location.pathname === '/newsfeed' ? 'active' : ''
              }`}
              to='/newsfeed'
            >
              Newsfeed
            </Link>
            <Link
              className={`p-0 m-2 nav-link ${
                location.pathname === '/profile/me' ? 'active' : ''
              }`}
              to='/profile/me'
            >
              Me
            </Link>
            <span
              style={{ cursor: 'pointer' }}
              className='p-0 m-2 nav-link'
              onClick={handleLogout}
            >
              Logout
            </span>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(TempNavBar);
