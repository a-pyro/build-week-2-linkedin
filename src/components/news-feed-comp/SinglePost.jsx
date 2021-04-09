import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';
import { ardisToken } from 'data/utilities';
// import EditModal from './EditModal';

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
      <Col xs={6} className='mt-3'>
        <div className='border rounded p-3 bg-white'>
          {/* <span>{this.props.post.text}</span> */}
          {!this.state.editMode && (
            <>
              {' '}
              <textarea
                style={{
                  color: 'black',
                  resize: 'none',
                  outline: 'none',
                  border: 'none',
                  background: 'unset',
                }}
                // type='text'
                disabled
                // value={this.props.post.text}
                value={this.state.text}
              />
              <span>
                {' '}
                by{' '}
                {this.props.post.user.name + ' ' + this.props.post.user.surname}
              </span>
              <p></p>
              <Button
                onClick={this.handleDeletePost}
                variant='outline-danger'
                className='rounded-circle'
              >
                X
              </Button>
              {/* <EditModal text={this.props.post.text}>
                <Button variant='outline-warning' className='rounded-circle'>
                  ?
                </Button>
              </EditModal>{' '} */}
              <Button
                onClick={this.handleEdit}
                variant='outline-warning'
                className='rounded-circle'
              >
                Edit
              </Button>
            </>
          )}
          {this.state.editMode && (
            <>
              {' '}
              <textarea
                style={{
                  resize: 'none',
                  outline: 'none',
                  border: 'none',
                  background: 'unset',
                }}
                // type='text'
                onChange={this.handleChange}
                value={this.state.text}
                autoFocus
              />
              <span>
                {' '}
                by{' '}
                {this.props.post.user.name + ' ' + this.props.post.user.surname}
              </span>
              <p></p>
              <Button
                onClick={this.handleDeletePost}
                variant='outline-danger'
                className='rounded-circle'
              >
                X
              </Button>
              {/* <EditModal text={this.props.post.text}>
                <Button variant='outline-warning' className='rounded-circle'>
                  ?
                </Button>
              </EditModal>{' '} */}
              <Button
                onClick={this.handleSave}
                variant='outline-info'
                className='rounded-circle'
              >
                Save
              </Button>
            </>
          )}
        </div>
      </Col>
    );
  }
}
