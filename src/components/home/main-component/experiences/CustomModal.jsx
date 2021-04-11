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
  const [expPic, setExpPic] = useState(null);

  const handleUpload = async (userID, experienceID) => {
    const formData = new FormData();
    formData.append('experience', expPic, expPic.name);
    const resp = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences/${experienceID}/picture`,
      {
        method: 'POST',
        headers: {
          Authorization: ardisToken,
        },
        body: formData,
      }
    );
    console.log(resp);
  };

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
    // aspetto che finisca di caricare e poi fetcho
    await handleUpload(body.user, body._id);
    fetchExperiences(body.user);
  };

  const editExperience = async (exp) => {
    setLoading(true);
    const resp = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences/${expID}`,
      {
        method: 'PUT',
        body: JSON.stringify(exp),
        headers: {
          'Content-Type': 'application/json',
          Authorization: ardisToken,
        },
      }
    );
    const body = await resp.json();
    setLoading(false);

    console.log(body);
    fetchExperiences(body.user);
  };

  const handleSubmit = () => {
    if (method === 'POST') {
      postExperience(fields);
    }
    if (method === 'PUT') {
      editExperience(fields);
    }
    handleClose();
  };

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setFields({ ...fields, [e.target.name]: value });
  };

  // file upload
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log(e.target.files[0]);
    setExpPic(selectedFile);
    console.log(expPic);
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
              <label> company</label>
              <input
                className='d-block'
                onChange={handleChange}
                name='company'
                value={fields.company}
              />{' '}
              <label>role </label>
              <input
                className='d-block'
                onChange={handleChange}
                name='role'
                value={fields.role}
              />
              <label>Area</label>
              <input
                className='d-block'
                onChange={handleChange}
                name='area'
                value={fields.area}
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
              <input type='file' onChange={handleFileChange} className='mt-3' />
              <p className='mt-3'>{expPic?.name ?? 'selected image'}</p>
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
