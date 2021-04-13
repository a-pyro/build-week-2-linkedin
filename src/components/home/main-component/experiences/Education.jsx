import React from 'react';
import { Container, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
// import { BsPencil } from 'react-icons/bs';
import { withRouter } from 'react-router-dom';
import SingleExperience from './SingleExperience';
import CustomModal from './CustomModal';
import { ardisToken } from 'data/utilities';

// import { GrCatalogOption } from 'react-icons/gr';

class EducationComponent extends React.Component {
  state = {
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

  componentDidMount = () => {
    if (this.props.user._id) this.fetchExperiences(this.props.user._id);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.user._id !== this.props.user._id) {
      this.fetchExperiences(this.props.user._id);
    }
  };

  render() {
    return (
      <StyledContainer className='mt-3'>
        <StyledDiv>
          <FlexColRow>
            <h4>Experiences</h4>
            {this.props.location.pathname === '/profile/me' && (
              <CustomModal
                method='POST'
                fetchExperiences={this.fetchExperiences}
              >
                <PlusButton style={{ cursor: 'pointer' }} />
              </CustomModal>
            )}
          </FlexColRow>
          <FlexColRow>
            <ul className='p-0'>
              {this.state.experiences.length > 0 &&
                this.state.experiences
                  .slice()
                  .reverse()
                  .map((exp) => (
                    <SingleExperience
                      key={exp._id}
                      fetchExperiences={this.fetchExperiences}
                      userID={this.props.user._id}
                      {...exp}
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
//   width: 100fff%;
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
