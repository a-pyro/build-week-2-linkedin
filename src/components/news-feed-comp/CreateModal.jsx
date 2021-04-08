import React, { useState } from 'react';
import { Modal, Button, Form, Image } from 'react-bootstrap';

const CreateModal = (props) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='w-100' onClick={handleShow}>
        {props.children}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='d-flex flex-column'>
            <div className='d-flex align-items-center mb-3'>
              <Image
                style={{ width: '70px', height: '70px' }}
                fluid
                roundedCircle
                src={props.userLogged?.image}
              />
              <h5>{props.userLogged.name + ' ' + props.userLogged.surname}</h5>
              <Button
                variant='outline-secondary'
                className='rounded-pill text-left w-100 ml-2 font-weight-bold'
              >
                Start a post
              </Button>
            </div>
            <Form.Group controlId='formBasicEmail'>
              <Form.Control
                type='text'
                name='text'
                placeholder='what do you want to talk about?'
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Check me out' />
            </Form.Group>
            <Button variant='primary' type='submit' className='align-self-end'>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateModal;
