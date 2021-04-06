import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Main from './main-component/Main';
import Side from './side-col/Side';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Main />
          <Side />
        </Row>
      </Container>
    );
  }
}
