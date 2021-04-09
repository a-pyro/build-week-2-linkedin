import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import {} from "react-router-dom";
import styled from "styled-components";
import { BsPencil } from "react-icons/bs";

const StyledContainer = styled(Container)`
  border-radius: 3px;
  border: solid grey 0.5px;
  padding: 0;
`;
const StyledDiv = styled.div`
  min-height: 195.5px;
  max-height: 195.5px;
  padding-bottom: 25%;
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
`;

const FlexColColumn = styled(Col)`
  display: flex;
  flex-direction: column;
  
`;
class PersonalDetails extends React.Component {
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


  fetchUser = async () =>  {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/ ", {
          method: "GET",
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDcwMTQzODUxZmFhYTAwMTViYWRmZGYiLCJpYXQiOjE2MTc5NTc5NDUsImV4cCI6MTYxOTE2NzU0NX0.yjLY9UryAgaHA9UblurFwQBEiZJJFT4DIsYWIsZ6KQE"
          },
      })
      let data = response.json()
  }
  //componentDidMount = async () =>{
  //let response = await fetch ()
  //}
  render() {
    return (
      <StyledContainer>
        <StyledDiv>
          <HeroImage />
        </StyledDiv>
        <DetailsDiv>
          <Row>
            <FlexColRow className="col-12">
              <ProfileImage src="https://media-exp1.licdn.com/dms/image/C4D03AQHrd2-LuPm_dA/profile-displayphoto-shrink_200_200/0/1612284608867?e=1623283200&v=beta&t=FbTmMKnbtrexZQFzmWfEi_e3WSWzQ0xEcavfkrxHJsQ" />
              <BsPencil className="mt-2" />
            </FlexColRow>
          </Row>
          <Row>
            <FlexColRow className="col-7 mt-3">
              <h4>Jamie Ellis</h4>
            </FlexColRow>
            <Col style={{display: "flex"}}className="col-5 mt-3">
              <img alt="education" width="32px" height="32px" src="https://media-exp1.licdn.com/dms/image/C4D0BAQFFQIjyDsOK0w/company-logo_100_100/0/1593351903670?e=1625702400&v=beta&t=3rWOTtMt8Oa6T_gmK3KDVW1m0AsgXMfL-JXwC0n4tXo"/>
              <h6 style={{margin: "6px 0 0 2px"}}>Strive School</h6>
            </Col>
          </Row>
          <Row>
          <FlexColColumn>
            <h6>Full-Stack Software Engineering at Strive School</h6>
            <h6>Marbella, Andalusia, Spain -<a href="">56 connections</a>  -<a href="">Contact info</a></h6>  
          </FlexColColumn>
          </Row>
          <Row>
            <Col className="col-12 mt-3">
              <Button>Open to</Button>
              <Button>Add profile section</Button>
              <Button>More...</Button>
            </Col>
          </Row>
          <Row>
            <span>{}</span>
          </Row>
        </DetailsDiv>
      </StyledContainer>
    );
  }
}

export default PersonalDetails;