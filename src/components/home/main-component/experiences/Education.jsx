import React from 'react';
import { Container, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
// import { BsPencil } from 'react-icons/bs';
import { withRouter } from 'react-router-dom';
import SingleExperience from './SingleExperience';
import CustomModal from './CustomModal';
import { ardisToken } from 'data/utilities';
import { GrCatalogOption } from 'react-icons/gr';

class EducationComponent extends React.Component {
  state = {
    user: {},
    experiences: [],
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
    const exp = await resp.json();
    this.setState({ experiences: exp });
  };

  //&& fetchUser = async (personToFetch) => {
  //   const resp = await fetch(
  //     `https://striveschool-api.herokuapp.com/api/profile/${personToFetch}`,
  //     {
  //       headers: {
  //         Authorization: ardisToken,
  //       },
  //     }
  //   );

  //   const data = await resp.json();
  //   this.setState({ user: data });
  //   //!tryexp this.fetchExp(data._id);
  //   // console.log(data);
  //   this.fetchExperiences(data._id);

  //   // console.log(data);
  //   // console.log(this.state.user);
  // };

  componentDidMount = () => {
    //&& this.fetchUser(this.props.match.params.id);
    if (this.props.user._id) this.fetchExperiences(this.props.user._id);
  };

  componentDidUpdate = (prevProps, prevState) => {
    // if (prevProps.match.params !== this.props.match.params) {
    //   // console.log(this.props.match);
    //   // console.log(this.props.match.params);
    //   //&& this.fetchUser(this.props.match.params.id);
    //   this.fetchExperiences(this.props.user._id);
    // }
    if (prevProps.user._id !== this.props.user._id) {
      this.fetchExperiences(this.props.user._id);
    }
  };

  // handleModalOpen = (exp) => {
  //   this.setState({ show: true, exp: exp });
  // };

  // handleClose = () => {
  //   this.setState({ show: false });
  // };

  render() {
    // console.log(this.props.user, 'in education');
    // console.log(this.state.experiences);
    // console.log(this.state.experiences);
    // console.log(this.props.location.pathname);
    // console.log('experiences of:', this.props.experiences);

    return (
      <StyledContainer className='mt-3'>
        <StyledDiv>
          <FlexColRow>
            <h4>Experiences</h4>
            {this.props.location.pathname === '/profile/me' && (
              <CustomModal fetchExperiences={this.fetchExperiences}>
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
                this.state.experiences
                  .slice()
                  .reverse()
                  .map((exp) => <SingleExperience key={exp._id} {...exp} />)}
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
