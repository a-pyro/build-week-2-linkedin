import React, { useState } from 'react';
import { Modal, Button, Form, Image, Spinner } from 'react-bootstrap';
import { ardisToken } from 'data/utilities';
import { GrStatusGood } from 'react-icons/gr';

const CreateModal = (props) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleClose = () => {
    setShow(false);
    setText('');
    setSuccessMsg('');
    props.getPosts();
  };
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    console.log('ci speri');
    e.preventDefault();
    setSuccessMsg('');
    setLoading(true);
    const resp = await fetch(
      'https://striveschool-api.herokuapp.com/api/posts/',
      {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: ardisToken,
        },
      }
    );

    // console.log(resp);
    setLoading(false);

    if (resp.ok) {
      setSuccessMsg('Congrats! Your post in on da line!');
      setText('');
    }
  };

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
              <h5 className='ml-3'>
                {props.userLogged?.name + ' ' + props.userLogged?.surname}
              </h5>
            </div>
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
              <Spinner className='justify-self-center' animation='grow' />
            )}

            {successMsg.length > 0 && (
              <>
                <div className='d-flex align-items-center mb-2'>
                  <GrStatusGood className='text-success' />
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
                Post!
              </Button>
            )}
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
           <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button> 
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default CreateModal;
