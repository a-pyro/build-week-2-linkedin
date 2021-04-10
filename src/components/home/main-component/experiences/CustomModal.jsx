import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class CustomModal extends Component {
  state = {
    area: '',
    company: '',
    role: '',
    description: '',
    image: '',
    startDate: '',
    endDate: '',
  };

  PostData = async () => {
    try {
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${'userId'}/experiences`,
        {
          method: this.props.method,
          body: JSON.stringify(this.state),
        }
      );
    } catch (error) {}
  };

  componentDidMount = () => {
    if (this.props.exp) {
      this.setState({ fields: this.props.exp });
    }
  };
  // componentDidUpdate = (prevProps) => {
  //   if (prevProps.exp !== this.props.exp && this.props.exp) {
  //     this.setState({ fields: this.props.exp });
  //   }
  // };
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ ...this.state.fields, [e.target.name]: value });
  };

  render() {
    return (
      <>
        <div>{this.props.children}</div>

        <Modal
          show={this.props.show}
          onHide={this.props.handleClose}
          backdrop='static'
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label>Area</label>
            <input
              className='d-block'
              onChange={this.handleChange}
              name='area'
              value={this.state.area}
            />
            <label> company</label>
            <input
              className='d-block'
              onChange={this.handleChange}
              name='company'
              value={this.state.company}
            />
            <label>role </label>
            <input
              className='d-block'
              onChange={this.handleChange}
              name='role'
              value={this.state.role}
            />
            <label>description </label>
            <input
              className='d-block'
              onChange={this.handleChange}
              name='description'
              value={this.state.description}
            />
            <label>startDate </label>
            <input
              className='d-block'
              onChange={this.handleChange}
              name='startDate'
              value={this.state.startDate}
              type='date'
            />
            <label>endDate </label>
            <input
              className='d-block'
              onChange={this.handleChange}
              name='endDate'
              value={this.state.endDate}
              type='date'
            />
            <label>image </label>
            <input
              className='d-block'
              onChange={this.handleChange}
              name='image'
              value={this.state.image}
              type='file'
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant='primary' onClick={this.PostData}>
              go!
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
