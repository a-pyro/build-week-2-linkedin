import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { BsBookmarkFill } from 'react-icons/bs';
import styled from 'styled-components';

// https://static-exp1.licdn.com/sc/h/4npmnn7reasq18uq6qp3ojhqn

export default class Dashboard extends Component {
  render() {
    return (
      <StyledContainer className='px-4 py-3 my-3 container-fluid rounded'>
        <Row className='flex-column'>
          <h5 className='font-weight-normal'>Your Dashboard</h5>
          <p className='font-weight-light font-italic'>Private to you</p>
        </Row>
        <Row className=''>
          <Col className='bg-white pt-2 border-right rounded-left'>
            <h4 className='font-weight-normal text-primary'>450</h4>
            <p>Lorem, ipsum dolor.</p>
          </Col>
          <Col className='bg-white pt-2'>
            <h4 className='font-weight-normal text-primary'>450</h4>
            <p>Lorem, ipsum dolor.</p>
          </Col>
          <Col className='bg-white pt-2 border-left rounded-right'>
            <h4 className='font-weight-normal text-primary'>450</h4>
            <p>Lorem, ipsum dolor.</p>
          </Col>
        </Row>
        <Row className='bg-white mt-3 p-2 rounded my-items'>
          <BsBookmarkFill />
          <div>
            <h6 className='m-0'>My items</h6>
            <p className='m-0'>Keep track of your jobs, courses and articles</p>
          </div>
        </Row>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled(Container)`
  background-color: #dce6f1;
  & .col {
    cursor: pointer;
  }
  & .my-items {
    cursor: pointer;
  }
  & p {
    font-size: 0.7rem;
  }
  & h4 {
    font-size: 1.2rem;
  }
  & svg {
    font-size: 1.2rem;
  }
`;
