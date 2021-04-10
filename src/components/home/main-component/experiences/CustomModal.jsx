import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ children, postExperience }) => {
  const [show, setShow] = useState(false);
  const [fields, setFields] = useState({
    area: '',
    company: '',
    role: '',
    description: '',
    image: '',
    startDate: '',
    endDate: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const postData = async () => {
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

  const handleChange = (e) => {
    const value = e.target.value;
    setFields({ ...fields, [e.target.name]: value });
  };

  return (
    <>
      <div onClick={handleShow}>{children}</div>

      <Modal
        show={show}
        onHide={handleClose}
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
            onChange={handleChange}
            name='area'
            value={fields.area}
          />
          <label> company</label>
          <input
            className='d-block'
            onChange={handleChange}
            name='company'
            value={fields.company}
          />
          <label>role </label>
          <input
            className='d-block'
            onChange={handleChange}
            name='role'
            value={fields.role}
          />
          <label>description </label>
          <input
            className='d-block'
            onChange={handleChange}
            name='description'
            value={fields.description}
          />
          <label>startDate </label>
          <input
            className='d-block'
            onChange={handleChange}
            name='startDate'
            value={fields.startDate}
            type='date'
          />
          <label>endDate </label>
          <input
            className='d-block'
            onChange={handleChange}
            name='endDate'
            value={fields.endDate}
            type='date'
          />
          <label>image </label>
          <input
            className='d-block'
            onChange={handleChange}
            name='image'
            value={fields.image}
            type='file'
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={postData}>
            go!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CustomModal;
