import React, { Component } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { RiVideoFill } from 'react-icons/ri';
import { RiCalendarEventFill } from 'react-icons/ri';
import { GrArticle } from 'react-icons/gr';

export default class CreatePost extends Component {
  render() {
    // console.log(this.props.userLogged);
    return (
      <StyledRow className='rounded p-2 py-3'>
        <Col xs={12}>
          <div className='d-flex'>
            <Image fluid roundedCircle src={this.props.userLogged?.image} />
            <Button
              variant='outline-secondary'
              className='rounded-pill w-100 text-left ml-2 font-weight-bold'
            >
              Start a post
            </Button>
          </div>
        </Col>
        <Col xs={12} className='mt-3'>
          <Row>
            <Col className='feed-post-icon d-flex align-items-center'>
              <StyledIcons>
                <HiOutlinePhotograph className='text-primary' />
                <span className='ml-2'>Photo</span>
              </StyledIcons>
            </Col>
            <Col className='feed-post-icon d-flex align-items-center'>
              <StyledIcons>
                <RiVideoFill className='text-success' />
                <span className='ml-2'>Video</span>
              </StyledIcons>
            </Col>
            <Col className='feed-post-icon d-flex align-items-center'>
              <StyledIcons>
                <RiCalendarEventFill className='text-warning' />
                <span className='ml-2'>Event</span>
              </StyledIcons>
            </Col>

            <Col className='feed-post-icon d-flex align-items-center'>
              <StyledIcons>
                <GrArticle className='text-primary' />
                <span className='ml-2'>Write article</span>
              </StyledIcons>
            </Col>
          </Row>
        </Col>
      </StyledRow>
    );
  }
}

const StyledRow = styled(Row)`
  background-color: white;
  border: 1px solid var(--border-color-cards);
  & img {
    width: 70px;
    height: 70px;
  }

  & svg {
    font-size: 2rem;
  }
`;

// !toFix hover not working
const StyledIcons = styled.div`
  cursor: pointer;

  padding: 0.5rem 0.7rem;
  background-color: white;

  & :hover * {
    background-color: lightgray;
  }
`;

{
  /* <Form>
  <Form.Group controlId='formBasicEmail'>
    <Form.Label>Email address</Form.Label>
    <Form.Control type='email' placeholder='Enter email' />
    <Form.Text className='text-muted'>
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
</Form>; */
}
