import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Main from './main-component/Main';
import Side from './side-col/Side';

export default class Home extends Component {
  state = {
    user: {},
    isLoading: true,
  };

  fetchUser = async (personToFetch) => {
    this.setState({ isLoading: true });
    const resp = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${personToFetch}`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMWEyNzZmZDIyODAwMTUzZmRiYjEiLCJpYXQiOjE2MTc2OTczMTksImV4cCI6MTYxODkwNjkxOX0.bSzAALu5Ose7Gdie6QifObaHxeHflzff7nHtUlrYWfI',
        },
      }
    );
    const data = await resp.json();

    this.setState({ user: data });
    this.setState({ isLoading: false });
    // console.log(data);
    // console.log(this.state.user);
  };

  componentDidMount = () => {
    // console.log(this.props.match);
    // console.log(this.props.match.params);

    this.fetchUser(this.props.match.params.id);
  };

  componentDidUpdate = (prevProp, prevState) => {
    if (prevProp.match.params !== this.props.match.params) {
      // console.log(this.props.match);
      // console.log(this.props.match.params);
      this.fetchUser(this.props.match.params.id);
    }
  };
  render() {
    return (
      <Container>
        <Row>
          <Main user={this.state.user} />
          <Side user={this.state.user} />
        </Row>
      </Container>
    );
  }
}
