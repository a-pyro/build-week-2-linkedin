import React, { Component } from 'react';
import { Button, Col, Card } from 'react-bootstrap';
import { ardisToken } from 'data/utilities';
// import EditModal from './EditModal';
import styled from 'styled-components';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiTwotoneEdit } from 'react-icons/ai';
import { GrStatusGood } from 'react-icons/gr';

//
export default class SinglePost extends Component {
  state = {
    editMode: false,
    text: this.props.post.text,
  };

  handleDeletePost = async () => {
    if (this.props.userLogged._id === this.props.post.user._id) {
      // this.setState({ isLoading: true });
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${this.props.post._id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: ardisToken,
          },
        }
      );
      console.log(resp);
      // this.setState({ isLoading: false });

      this.props.getPosts();
    } else {
      alert('non puoi toccare i post degli altri 💩');
    }
  };

  handleEdit = () => {
    if (this.props.userLogged._id === this.props.post.user._id) {
      this.setState({ editMode: !this.state.editMode });
    } else {
      alert('non puoi toccare i post degli altri 💩');
    }
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSave = async () => {
    //&&implement ask if wanna delete
    // if (this.state.text.length === 0) {
    // }

    const text = this.state.text;
    console.log('puttttinnnnn');
    const resp = await fetch(
      `https://striveschool-api.herokuapp.com/api/posts/${this.props.post._id}`,
      {
        method: 'PUT',
        body: JSON.stringify({ text }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: ardisToken,
        },
      }
    );

    console.log(resp);
    this.setState({ editMode: false });
  };

  render() {
    // console.log(this.props);
    // console.log(this.props);

    return (
      <StyledCol xs={12} className='mt-3 px-0'>
        <Card className='border rounded p-3 px-4 bg-white'>
          {!this.state.editMode && (
            <>
              {' '}
              <h6 className='font-weight-bold mt-3'>
                {' '}
                by{' '}
                {this.props.post.user.name + ' ' + this.props.post.user.surname}
              </h6>
              <textarea
                style={{
                  color: 'black',
                  resize: 'none',
                  outline: 'none',
                  border: 'none',
                  background: 'unset',
                }}
                disabled
                value={this.state.text}
              />
              {/* <Button
                  onClick={this.handleDeletePost}
                  variant='outline-danger'
                  className='rounded-pill mt-2'
                >
                  🚮
                </Button> */}
              <div className='d-flex align-items-center'>
                <BsFillTrashFill
                  onClick={this.handleDeletePost}
                  style={{ cursor: 'pointer', fontSize: '1.3rem' }}
                  className='mr-3'
                />

                <AiTwotoneEdit
                  style={{ cursor: 'pointer', fontSize: '1.5rem' }}
                  onClick={this.handleEdit}
                />

                {/* <Button
                  onClick={this.handleEdit}
                  variant='outline-warning'
                  className='rounded-pill mt-2'
                >
                  Edit
                </Button> */}
              </div>
            </>
          )}
          {this.state.editMode && (
            <>
              {' '}
              <h6 className='font-weight-bold'>
                {' '}
                by{' '}
                {this.props.post.user.name + ' ' + this.props.post.user.surname}
              </h6>
              <textarea
                style={{
                  resize: 'none',
                  outline: 'none',
                  border: 'none',
                  background: 'unset',
                }}
                onChange={this.handleChange}
                value={this.state.text}
                autoFocus
              />
              <div className='d-flex align-items-center'>
                <BsFillTrashFill
                  onClick={this.handleDeletePost}
                  style={{ cursor: 'pointer', fontSize: '1.3rem' }}
                  className='mr-3'
                />

                <GrStatusGood
                  style={{
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                    color: 'green',
                  }}
                  onClick={this.handleSave}
                />
              </div>
            </>
          )}
        </Card>
      </StyledCol>
    );
  }
}

const StyledCol = styled(Col)`
  color: #4b4b4b;
  border: none;

  /* & div {
    padding: 10px;
  } */
`;
