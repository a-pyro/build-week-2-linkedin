import React, { Component } from 'react';
import { BsChevronCompactDown } from 'react-icons/bs';
import { BsChevronCompactUp } from 'react-icons/bs';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { BsChevronCompactRight } from 'react-icons/bs';
import styled from 'styled-components';
import { Col, Container, Form, Row, Button, Badge } from 'react-bootstrap';

export default class ProfileStrength extends Component {
  state = {
    isClicked: true,
  };

  handleClick = () => this.setState({ isClicked: !this.state.isClicked });

  render() {
    return (
      <StyledDiv className='rounded p-2 px-3'>
        <div className='d-flex justify-content-between'>
          <p>
            Profile Strength:{' '}
            <span className='font-weight-bold'>Intermediate</span>
          </p>
          {!this.state.isClicked && (
            <BsChevronCompactDown onClick={this.handleClick} />
          )}
          {this.state.isClicked && (
            <BsChevronCompactUp onClick={this.handleClick} />
          )}
        </div>

        <div className='bar-container'>
          <Form.Group controlId='formBasicRange'>
            <Form.Control min='0' max='100' type='range' />
          </Form.Group>
        </div>

        {this.state.isClicked && (
          <div className='update-section'>
            <Container fluid>
              <Row className='no-gutters'>
                <Col xs={1} className=''>
                  <img
                    src='https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1625702400&v=beta&t=3rWOTtMt8Oa6T_gmK3KDVW1m0AsgXMfL-JXwC0n4tXo'
                    alt='strive'
                    className='w-100'
                  />
                </Col>
                <Col xs={11}>
                  <p className='font-weight-bold m-0 ml-3'>
                    Update your education details
                  </p>
                  <p className='m-0 ml-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </Col>
              </Row>
              <Row className='mt-3 align-items-center justify-content-between'>
                <div className='d-flex'>
                  <span className='mr-3 text-muted p-1'>
                    <BsChevronCompactLeft />
                    Previous
                  </span>
                  <span className='p-1'>
                    Next
                    <BsChevronCompactRight />
                  </span>
                </div>
                <div className='d-flex align-items-center'>
                  <span className='mr-3 p-1'>Does not apply</span>

                  <Button
                    variant='primary'
                    className='rounded-pill font-weight-bold py-1'
                  >
                    Update Education
                  </Button>
                </div>
              </Row>
            </Container>
          </div>
        )}
      </StyledDiv>
    );
  }
}
const StyledDiv = styled.div`
  background-color: white;

  & svg {
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      background-color: lightgray;
      border-radius: 50%;
    }
  }

  & .update-section {
    transition: 0.5s ease;

    & img {
      width: 50px;
    }

    & span {
      cursor: pointer;

      &:hover {
        background-color: lightgray;
        border-radius: 8px;
      }
    }
  }
`;
