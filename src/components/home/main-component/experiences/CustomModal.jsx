import React, { useState } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';
import { ardisToken } from 'data/utilities';
import { format, parseISO } from 'date-fns';
// & add validation for startDate
const CustomModal = ({
  children,
  fetchExperiences,
  userID,
  method,
  expID,
  area,
  company,
  role,
  description,
  startDate,
  endDate,
}) => {
  const initialFields = {
    area: area ?? '',
    company: company ?? '',
    role: role ?? '',
    description: description ?? '',
    startDate: (startDate && format(parseISO(startDate), 'yyyy-MM-dd')) || '',
    endDate: (endDate && format(parseISO(endDate), 'yyyy-MM-dd')) || '',
  };
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(initialFields);

  const postExperience = async (newExp) => {
    setLoading(true);
    const resp = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences`,
      {
        method: 'POST',
        body: JSON.stringify(newExp),
        headers: {
          'Content-Type': 'application/json',
          Authorization: ardisToken,
        },
      }
    );
    const body = await resp.json();
    setLoading(false);
    setFields(initialFields);
    console.log(body);
    fetchExperiences(body.user);
  };

  // console.log(format(new Date(parseISO(startDate)), 'yyyy/MM/dd'));
  // const
  const handleSubmit = () => {
    if (method === 'POST') postExperience(fields);
    // if (method === 'PUT') editExperience()
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setFields({ ...fields, [e.target.name]: value });
  };

  return (
    <>
      <div className='d-inline-block' onClick={handleShow}>
        {children}
      </div>

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
          {loading && <Spinner animation='grow' />}
          {!loading && (
            <>
              {' '}
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
                required
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
            </>
          )}
          {/* <label>image </label>
            <input
              className='d-block'
              onChange={handleChange}
              name='image'
              value={fields.image}
              type='file'
            /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            go!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CustomModal;
