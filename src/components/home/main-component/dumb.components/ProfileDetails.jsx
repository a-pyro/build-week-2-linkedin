import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import {} from 'react-router-dom';
import styled from 'styled-components';
import { BsPencil } from 'react-icons/bs';

const StyledContainer = styled(Container)`
  border-radius: 3px;
  background-color: white;
  border: 1px solid #dddcd9;
  padding: 0;
`;
const StyledDiv = styled.div`
  min-height: 195.5px;
  max-height: 195.5px;
  padding-bottom: 25%;
`;
const HeroImage = styled(Image)`
  background-image: url(https://www.snsmarketing.es/blog/wp-content/uploads/2018/10/linkedin.png);
  position: relative;
  width: 100%;
  min-height: 195.5px;
  max-height: 195.5px;
`;

const DetailsDiv = styled.div`
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  text-align: left;
`;

const ProfileImage = styled(Image)`
  margin-top: -104px;
  z-index: 4;
  width: 160px;
  height: 160px;
  background-clip: content-box;
  border-radius: 50%;
  box-sizing: border-box;
`;

const FlexColRow = styled(Col)`
  display: flex;
  justify-content: space-between;
`;

const FlexColColumn = styled(Col)`
  display: flex;
  flex-direction: column;
`;

const OpenToButton = styled(Button)`
  border-radius: 30px;
  background-color: rgb(10 102 194);
  margin-right: 8px;
`;
const OtherButtons = styled(Button)`
  border-radius: 30px;
  background: none;
  color: grey;
  margin-right: 8px;
  border: 1px solid grey;
`;
class PersonalDetails extends React.Component {
  replaceBrokenImg = (e) => {
    console.log('img src not fount, dont worrie, got a fallback :)');
    e.target.src = `https://picsum.photos/100/100?random=${Math.ceil(
      Math.random() * 1000
    )}`;
  };

  render() {
    return (
      <StyledContainer className='mt-3'>
        <StyledDiv>
          <HeroImage />
        </StyledDiv>
        <DetailsDiv>
          <Row>
            <FlexColRow className='col-12'>
              <ProfileImage
                onError={this.replaceBrokenImg}
                src={this.props.user.image}
              />
              <BsPencil className='mt-2' />
            </FlexColRow>
          </Row>
          <Row>
            <FlexColRow className='col-7 mt-3'>
              <h4>
                {this.props.user.name} {this.props.user.surname}
              </h4>
            </FlexColRow>
            <Col style={{ display: 'flex' }} className='col-5 mt-3'>
              <img
                alt='education'
                width='32px'
                height='32px'
                src='https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1625702400&v=beta&t=3rWOTtMt8Oa6T_gmK3KDVW1m0AsgXMfL-JXwC0n4tXo'
              />
              <h6 style={{ margin: '6px 0 0 2px' }}>Strive School</h6>
            </Col>
          </Row>
          <Row>
            <FlexColColumn>
              <h6>{this.props.user.title}</h6>
              <h6>
                {this.props.user.area} - <span>56 connections</span> -{' '}
                <span>Contact info</span>
              </h6>
            </FlexColColumn>
          </Row>
          <Row>
            <Col className='col-12 mt-3'>
              <OpenToButton>Open to</OpenToButton>
              <OtherButtons>Add profile section</OtherButtons>
              <OtherButtons>More...</OtherButtons>
            </Col>
          </Row>
        </DetailsDiv>
      </StyledContainer>
    );
  }
}

export default PersonalDetails;
