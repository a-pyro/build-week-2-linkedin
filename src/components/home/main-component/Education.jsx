import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import {} from "react-router-dom";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import {BsPencil} from 'react-icons/bs'

const StyledContainer = styled(Container)`
  border-radius: 3px;
  border: solid grey 0.5px;
  padding: 0 0 24px;
`;
const StyledDiv = styled.div`
  border-bottom: 1px solid grey;
  padding-bottom: 24px;
`;
const HeroImage = styled(Image)`
  background-image: url(https://i.stack.imgur.com/y9DpT.jpg);
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
  padding: 24px 24px 0;
`;

const FlexColColumn = styled(Col)`
  display: flex;
  flex-direction: column;
`;

const PlusButton = styled(AiOutlinePlus)`
  display: inline-block;
  overflow: hidden;
  position: relative;
`;

const ListItem = styled.li`
  padding: 0 72px 0 0;
  justify-content: space-between;
  width: 100%;
  display: flex;
`;
const LogoImage = styled.img`
  height: 56px;
  width: 56px;
  position:;
`;
class EducationComponent extends React.Component {
  state = {
    user: {
      area: "",
      bio: "",
      email: "",
      image: "",
      name: "",
      surname: "",
      title: "",
      username: "",
    },
  };

  //componentDidMount = async () =>{
  //let response = await fetch ()
  //}
  render() {
    return (
      <StyledContainer>
        <StyledDiv>
          <FlexColRow>
            <h4>Education</h4>
            <a href="">
              <PlusButton />
            </a>
          </FlexColRow>
          <FlexColRow>
            <ul className="p-0">
              <ListItem>
                    <LogoImage className= "mr-3" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1625702400&v=beta&t=3rWOTtMt8Oa6T_gmK3KDVW1m0AsgXMfL-JXwC0n4tXo" />
                <FlexColColumn className='p-0 '>
                  <h6 className= "m-0">Strive School</h6>
                  <p className= "m-0">Full-Stack Software Engineering</p>
                  <p className= "m-0">2021</p>
                  <p className= "m-0">Activities: React, Node.js, Javascript, HTML</p>
                </FlexColColumn>
                
              </ListItem>
            </ul>
           <a href=""><BsPencil /></a>
          </FlexColRow>
        </StyledDiv>
        <StyledDiv>
        <FlexColRow>
            <h4>Licenses & Certifications</h4>
            <a href="">
              <PlusButton />
            </a>
          </FlexColRow>
          <FlexColRow>
            <ul className="p-0">
              <ListItem>
                    <LogoImage className= "mr-3" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1625702400&v=beta&t=3rWOTtMt8Oa6T_gmK3KDVW1m0AsgXMfL-JXwC0n4tXo" />
                <FlexColColumn className='p-0 '>
                  <h6 className= "m-0">
    ReactJS: creation of scalable SPAs using the modern ReactJS library. 
  </h6>
                  <p className= "m-0">Strive School</p>
                  <p className= "m-0">Issued Apr 2021 - No Expiration Date</p>
                  <p className= "mt-3"><a href="">See Credential</a></p>
                </FlexColColumn>
                
              </ListItem>
            </ul>
           <a href=""><BsPencil /></a>
          </FlexColRow>
        </StyledDiv>
      </StyledContainer>
    );
  }
}

export default EducationComponent;
