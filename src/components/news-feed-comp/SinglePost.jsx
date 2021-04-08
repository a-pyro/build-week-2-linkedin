import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';
import { ardisToken } from 'data/utilities';
import EditModal from './EditModal';

//
export default class SinglePost extends Component {
  state = {
    edited: false,
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
      alert('non puoi toccare i post degli altri');
    }
  };

  // handleEdit = () => {};

  render() {
    // console.log(this.props);
    // console.log(this.props);

    return (
      <Col xs={6} className='mt-3'>
        <div className='border rounded p-3 bg-white'>
          {/* <span>{this.props.post.text}</span> */}
          <span>
            {' '}
            by {this.props.post.user.name + ' ' + this.props.post.user.surname}
          </span>
          <p></p>

          <Button
            onClick={this.handleDeletePost}
            variant='outline-danger'
            className='rounded-circle'
          >
            X
          </Button>
          <EditModal text={this.props.post.text}>
            <Button variant='outline-warning' className='rounded-circle'>
              ?
            </Button>
          </EditModal>
        </div>
      </Col>
    );
  }
}
