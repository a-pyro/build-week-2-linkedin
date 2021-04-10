import React from 'react';
import { Container, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
// import { BsPencil } from 'react-icons/bs';
import { withRouter } from 'react-router-dom';
import SingleExperience from './SingleExperience';
import CustomModal from './CustomModal';

class EducationComponent extends React.Component {
  state = {
    show: false,
    exp: null,
  };

  // componentDidMount() {
  //   // this.fetchExp(this.props.match.params.id);
  //   //this.fetchExp();
  // }

  // componentDidUpdate = (prevProp, prevState) => {
  //   if (
  //     prevProp.match.params !== this.props.match.params &&
  //     this.props.userLogged
  //   ) {

  //   }
  // };

  handleModalOpen = (exp) => {
    this.setState({ show: true, exp: exp });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    // console.log(this.props.location.pathname);
    console.log('experiences of:', this.props.experiences);

    return (
      <StyledContainer className='mt-3'>
        <StyledDiv>
          <FlexColRow>
            <h4>Experiences</h4>
            {this.props.location.pathname === '/profile/me' && (
              <CustomModal
                show={this.state.show}
                method='POST'
                exp={this.state.exp}
                handleClose={this.handleClose}
              >
                <PlusButton
                  style={{ cursor: 'pointer' }}
                  onClick={() => this.setState({ show: true })}
                />
              </CustomModal>
            )}
          </FlexColRow>
          <FlexColRow>
            <ul className='p-0'>
              {this.props.experiences.length > 0 &&
                this.props.experiences.map((exp) => (
                  <SingleExperience
                    userLoggedID={this.state.userLogged?._id}
                    key={exp._id}
                    {...exp}
                    handleModalOpen={this.handleModalOpen}
                  />
                ))}
            </ul>
          </FlexColRow>
        </StyledDiv>
      </StyledContainer>
    );
  }
}

export default withRouter(EducationComponent);

const StyledContainer = styled(Container)`
  border-radius: 3px;
  background-color: white;
  border: 1px solid #dddcd9;
  padding: 0 0 24px;
`;
const StyledDiv = styled.div`
  border-bottom: 1px solid grey;
  padding-bottom: 24px;
`;
// const HeroImage = styled(Image)`
//   background-image: url(https://i.stack.imgur.com/y9DpT.jpg);
//   position: relative;
//   width: 100%;
//   min-height: 195.5px;
//   max-height: 195.5px;
// `;

// const DetailsDiv = styled.div`
//   padding-bottom: 24px;
//   padding-left: 24px;
//   padding-right: 24px;
//   text-align: left;
// `;

const FlexColRow = styled(Col)`
  display: flex;
  justify-content: space-between;
  padding: 24px 24px 0;
`;

const PlusButton = styled(AiOutlinePlus)`
  display: inline-block;
  overflow: hidden;
  position: relative;
`;
