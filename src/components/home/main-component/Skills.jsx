import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import { HiPencil } from 'react-icons/hi';

export default class Skills extends Component {
  state = {
    showMore: false,
    skills: [
      'Computer Science',
      'Programming',
      'Frontend Development',
      'Frontend Development',
      'Frontend Development',
      'Frontend Development',
      'Frontend Development',
    ],
  };

  handleClick = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  // componentDidMount() {
  //   const skills = localStorage.getItem('skills');
  //   if (skills) {
  //     this.setState({ skills: JSON.parse(skills) });
  //   } else {
  //     localStorage.setItem('skills', JSON.stringify(this.state.skills));
  //   }
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.setState({skill: [...this.state.skills, newSkill]})
  // }

  // componentDidUpdate = (prevProp, prevState) => {

  //   localStorage.setItem(
  //     'skills',
  //     JSON.stringify(this.state.skills)
  //   );
  // };

  render() {
    return (
      <>
        <StyledContainer fluid className='pt-3 mt-3 rounded-top'>
          <Row className='align-items-center px-2'>
            <Col>
              <h4>Skills & endorsements</h4>
            </Col>
            <Col className='d-flex justify-content-end'>
              <div className='add-skill d-flex px-1 pt-2 rounded'>
                <h6 className='text-right mr-2'>Add a new skill</h6>
                <HiPencil className='text-primary' />
              </div>
            </Col>
          </Row>
          <Row className='px-4'>
            <Button
              variant='outline-primary'
              className='rounded-pill px-4 py-1 font-weight-bold my-3'
            >
              Take Skill quiz
            </Button>
          </Row>
          {!this.state.showMore && (
            <Row className='px-4'>
              {this.state.skills.slice(0, 3).map((skill) => (
                <Col xs={12} className='border-bottom py-2 px-0'>
                  <h5 className='font-weight-bold'>{skill}</h5>
                  <p className='mb-0'>
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </Col>
              ))}
            </Row>
          )}
          {this.state.showMore && (
            <Row className='px-4'>
              {this.state.skills.map((skill) => (
                <Col xs={12} className='border-bottom py-2 px-0'>
                  <h5 className='font-weight-bold'>{skill}</h5>
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
          <h6 className='text-primary m-0 mr-2'>Show more</h6>
          {!this.state.showMore && (
            <BsChevronCompactDown className='text-primary font-weight-bold' />
          )}
          {this.state.showMore && (
            <BsChevronCompactUp className='text-primary font-weight-bold' />
          )}
        </StyledSection>
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
