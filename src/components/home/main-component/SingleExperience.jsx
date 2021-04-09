import styled from 'styled-components';
import { Image, Col } from 'react-bootstrap';
import { BsPencil } from 'react-icons/bs';
import { BsFillTrashFill } from 'react-icons/bs';
import { withRouter } from 'react-router-dom';

const SingleExperience = ({
  area,
  company,
  description,
  image,
  role,
  startDate,
  endDate,
  userLoggedID,
  match,
  _id,
}) => {
  console.log(userLoggedID);
  return (
    <ListItem>
      <LogoImage className='mr-3' src={image} />
      <FlexColColumn className='p-0 '>
        {company && <p className='m-0'>Company: {company}</p>}
        {role && <p className='m-0'>Role: {role}</p>}
        {startDate && <p className='m-0'>Started: {startDate}</p>}
        {endDate && <p className='m-0'>Ended: {endDate}</p>}
        {area && <p className='m-0'>Area: {area}</p>}
        {description && <p className='m-0'>Description: {description}</p>}

        {userLoggedID === match.params.id && (
          <div>
            <BsPencil
              style={{ cursor: 'pointer' }}
              onClick={() =>
                this.props.handleModalOpen({
                  area,
                  company,
                  description,
                  image,
                  role,
                  startDate,
                  endDate,
                  userLoggedID,
                  match,
                  _id,
                })
              }
            />
            <BsFillTrashFill style={{ cursor: 'pointer' }} />
          </div>
        )}
      </FlexColColumn>
    </ListItem>
  );
};

export default withRouter(SingleExperience);

const ProfileImage = styled(Image)`
  margin-top: -104px;
  z-index: 4;
  width: 160px;
  height: 160px;
  background-clip: content-box;
  border-radius: 50%;
  box-sizing: border-box;
`;
const FlexColColumn = styled(Col)`
  display: flex;
  flex-direction: column;
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
  /* position:; */
`;
