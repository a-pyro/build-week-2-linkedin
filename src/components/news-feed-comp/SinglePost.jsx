import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ardisToken } from 'data/utilities';

//
export default class SinglePost extends Component {
  state = {
    isLoading: true,
  };

  handleDeletePost = async () => {
    if (this.props.userLogged === this.props.post.user.name.toLowerCase()) {
      this.setState({ isLoading: true });
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
      this.setState({ isLoading: false });
    } else {
      alert('non puoi toccare i post degli altri');
    }
  };

  render() {
    console.log(this.props);

    // console.log(this.props);
    return (
      <div className='d-flex flex-column my-3'>
        <h6>{this.props.post.text}</h6>
        <div>
          <Button
            onClick={this.handleDeletePost}
            variant='outline-danger'
            className='rounded-circle'
          >
            X
          </Button>
          <Button variant='outline-warning' className='rounded-circle'>
            ?
          </Button>
        </div>
      </div>
    );
  }
}
