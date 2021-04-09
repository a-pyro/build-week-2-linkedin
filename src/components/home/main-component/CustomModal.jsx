import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class CustomModal extends Component {
  state = {
    fields: {},
  };

  PostData = async () => {
    try {
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${'userId'}/experiences`,
        {
          method: this.props.method,
          body: JSON.stringify(this.state.fields),
        }
      );
    } catch (error) {}
  };
  componentDidMount = () => {
    if (this.props.exp) {
      this.setState({ fields: this.props.exp });
    }
  };
  componentDidUpdate = (prevProps) => {
    if (prevProps.exp !== this.props.exp && this.props.exp) {
      this.setState({ fields: this.props.exp });
    }
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
            <input value={this.state.fields.role} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.props.handleClose}>
              Close
            </Button>
            <Button variant='primary'>Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
