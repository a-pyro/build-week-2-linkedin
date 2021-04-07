import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col, Button, Container, Spinner } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import { ardisToken } from 'data/utilities';

export default class PeopleAlsoViewed extends Component {
  state = {
    showMore: false,
    isLoading: true,
    users: [],
  };

  handleClick = () => this.setState({ showMore: !this.state.showMore });

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    try {
      const resp = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/',
        { headers: { Authorization: ardisToken } }
      );

      const users = await resp.json();
      console.log(users);

      this.setState({ users });
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        {this.state.isLoading && (
          <Container fluid className='mt-3'>
            <Row className='justify-content-center'>
              <Spinner animation='grow' variant='secondary' />
            </Row>
          </Container>
        )}

        {!this.state.isLoading && (
          <>
            <StyledContainer fluid className='pt-3 mt-3 rounded-top'>
              <Row className='align-items-center px-2'>
                <Col>
                  <h6 className='font-weight-bold'>People also viewed</h6>
                </Col>
              </Row>

              {!this.state.showMore && (
                <Row className='px-4'>
                  {this.state.users.slice(0, 5).map((user) => (
                    <Col
                      key={uuidv4()}
                      xs={12}
                      className='border-bottom py-2 px-0'
                    >
                      <h5 className='font-weight-bold'>{user.name}</h5>
                      <p className='mb-0'>
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                    </Col>
                  ))}
                </Row>
              )}
              {this.state.showMore && (
                <Row className='px-4'>
                  {this.state.users.slice(0, 15).map((user) => (
                    <Col
                      key={uuidv4()}
                      xs={12}
                      className='border-bottom py-2 px-0'
                    >
                      <h5 className='font-weight-bold'>{user.name}</h5>
                      <p className='mb-0'>
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                    </Col>
                  ))}
                </Row>
              )}
            </StyledContainer>
            <StyledSection
              onClick={this.handleClick}
              className='d-flex justify-content-center py-2 px-0 align-items-center rounded-bottom'
            >
              {!this.state.showMore && (
                <>
                  <h6 className='text-primary m-0 mr-2'>Show more</h6>
                  <BsChevronCompactDown className='text-primary font-weight-bold' />
                </>
              )}
              {this.state.showMore && (
                <>
                  <h6 className='text-primary m-0 mr-2'>Show less</h6>
                  <BsChevronCompactUp className='text-primary font-weight-bold' />
                </>
              )}
            </StyledSection>
          </>
        )}
      </>
    );
  }
}

const StyledContainer = styled(Container)`
  background-color: white;
  border: 1px solid #dddcd9;
  & .add-skill {
    cursor: pointer;

    &:hover {
      background-color: lightgray;
    }
  }

  & button:hover {
    background-color: var(--color-hover-section);
    color: var(--primary);
  }

  & .text-container {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      border: 1px solid grey;
    }
  }
`;

const StyledSection = styled.section`
  background-color: white;
  border: 1px solid #dddcd9;
  border-top: none;

  cursor: pointer;
  &:hover {
    background-color: var(--color-hover-section);

    & * {
      color: var(--color-hover-btn) !important;
    }
  }
`;
