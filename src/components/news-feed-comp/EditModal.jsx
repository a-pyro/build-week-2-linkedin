import React, { useState } from 'react';
import { Button, Modal, Form, Spinner } from 'react-bootstrap';
import { GrStatusGood } from 'react-icons/gr';
import { ardisToken } from 'data/utilities';

const EditModal = (props) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleClose = () => {
    setShow(false);
    setText('');
    setSuccessMsg('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-inline-block ml-3' onClick={handleShow}>
        {props.children}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='d-flex flex-column'>
            {!loading && successMsg.length === 0 && (
              <Form.Group>
                <Form.Control
                  as='textarea'
                  onChange={(e) => setText(e.target.value)}
                  name='text'
                  value={text}
                  placeholder='what do you want to talk about?'
                  rows={3}
                />
              </Form.Group>
            )}

            {loading && (
              <div className='align-self-center'>
                <Spinner animation='grow' />
              </div>
            )}

            {successMsg.length > 0 && (
              <>
                <div
                  style={{ fontSize: '1.3rem' }}
                  className='d-flex align-items-center text-success mb-2 justify-content-center'
                >
                  <GrStatusGood />
                  <span className='ml-2'>{successMsg}</span>
                </div>
                <Button
                  onClick={handleClose}
                  variant='success'
                  className='align-self-end rounded-pill py-0'
                >
                  Go to Feed, Your Cat!
                </Button>
              </>
            )}

            {successMsg.length === 0 && (
              <Button
                onClick={handleSubmit}
                disabled={text.length === 0 ? true : false}
                variant='secondary'
                type='submit'
                className='align-self-end rounded-pill'
              >
                Edit!
              </Button>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
