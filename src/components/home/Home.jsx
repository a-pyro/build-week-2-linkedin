import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Main from './main-component/Main';
import Side from './side-col/Side';

export default class Home extends Component {
  state = {
    user: {},
  };

  componentDidMount = async () => {
    const resp = await fetch(
      'https://striveschool-api.herokuapp.com/api/profile/me',
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMWEyNzZmZDIyODAwMTUzZmRiYjEiLCJpYXQiOjE2MTc2OTczMTksImV4cCI6MTYxODkwNjkxOX0.bSzAALu5Ose7Gdie6QifObaHxeHflzff7nHtUlrYWfI',
        },
      }
    );
    const data = await resp.json();
    console.log(data);

    this.setState({ user: data });
  };

  render() {
    return (
      <Container>
        <Row>
          <Main user={this.state.user} />
          <Side />
        </Row>
      </Container>
    );
  }
}
