import React from 'react';
import { Container, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
// import { BsPencil } from 'react-icons/bs';
import { withRouter } from 'react-router-dom';
import SingleExperience from './SingleExperience';
import CustomModal from './CustomModal';
import { ardisToken } from 'data/utilities';

class EducationComponent extends React.Component {
  state = {
    user: {},
    experiences: [],
  };

  postExperience = async (newExp) => {
    const resp = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${this.state.user._id}/experiences,`,
      {
        method: 'POST',
        body: JSON.stringify(newExp),
        headers: {
          'Content-Type': 'application-json',
          Authorization: ardisToken,
        },
      }
    );
    console.log(resp);
  };

  fetchExperiences = async (id) => {
    const resp = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
      {
        headers: {
          Authorization: ardisToken,
        },
      }
    );
    const experiences = await resp.json();
    this.setState({ experiences });
  };
  fetchUser = async (personToFetch) => {
    const resp = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${personToFetch}`,
      {
        headers: {
          Authorization: ardisToken,
        },
      }
    );

    const data = await resp.json();
    this.setState({ user: data });
    //!tryexp this.fetchExp(data._id);
    // console.log(data);
    this.fetchExperiences(data._id);

    // console.log(data);
    // console.log(this.state.user);
  };

  componentDidMount = () => {
    this.fetchUser(this.props.match.params.id);
  };
  componentDidUpdate = (prevProp) => {
    if (prevProp.match.params !== this.props.match.params) {
      // console.log(this.props.match);
      // console.log(this.props.match.params);
      this.fetchUser(this.props.match.params.id);
    }
  };

  // handleModalOpen = (exp) => {
  //   this.setState({ show: true, exp: exp });
  // };

  // handleClose = () => {
  //   this.setState({ show: false });
  // };

  render() {
    // console.log(this.props.location.pathname);
    // console.log('experiences of:', this.props.experiences);

    return (
      <StyledContainer className='mt-3'>
        <StyledDiv>
          <FlexColRow>
            <h4>Experiences</h4>
            {this.props.location.pathname === '/profile/me' && (
              <CustomModal postExperience={this.postExperience}>
                <PlusButton
                  style={{ cursor: 'pointer' }}
                  // onClick={() => this.setState({ show: true })}
                />
              </CustomModal>
            )}
          </FlexColRow>
          <FlexColRow>
            <ul className='p-0'>
              {this.state.experiences.length > 0 &&
                this.state.experiences.map((exp) => (
                  <SingleExperience key={exp._id} {...exp} />
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
