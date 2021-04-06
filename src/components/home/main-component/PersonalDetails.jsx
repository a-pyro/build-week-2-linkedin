import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import {} from "react-router-dom";
import styled from "styled-components";
import {BsPencil} from 'react-icons/bs';

const StyledContainer = styled(Container)`
  border-radius: 3px;
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
display: flex;
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

const PencilIcon = styled(BsPencil)`
align-self: flex-end;
display: block;
`
class PersonalDetails extends React.Component {
    state= {
        user: {
        area: "",
        bio: "",
        email:"",
        image: "",
        name:"",
        surname:"",
        title:"",
        username:"",
        }
    }
    
    componentDidMount = async () =>{
        let response = await fetch ()
    }
    render() {
    return (
      <StyledContainer>
        <StyledDiv>
          <HeroImage />
        </StyledDiv>
        <DetailsDiv>
            <Row style={{display: "flex"}}>
                <ProfileImage src="https://media-exp1.licdn.com/dms/image/C4D03AQHrd2-LuPm_dA/profile-displayphoto-shrink_200_200/0/1612284608867?e=1623283200&v=beta&t=FbTmMKnbtrexZQFzmWfEi_e3WSWzQ0xEcavfkrxHJsQ"/>
                <PencilIcon/>
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
