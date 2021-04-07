import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Main from './main-component/Main';
import Side from './side-col/Side';

export default class Home extends Component {
  state = {
    user: {},
    userExperciences: {},
    isLoading: true,
  };

  fetchUser = async () => {
    this.setState({ isLoading: true });
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
    this.setState({ isLoading: false });
  };

  fetchExperiences = async () => {
    this.setState({ isLoading: true });
    console.log(this.state.user._id);
    console.log(
      `https://striveschool-api.herokuapp.com/api/profile/${this.state.user._id}/experiences`
    );
    const resp = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${this.state.user._id}/experiences`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMWEyNzZmZDIyODAwMTUzZmRiYjEiLCJpYXQiOjE2MTc2OTczMTksImV4cCI6MTYxODkwNjkxOX0.bSzAALu5Ose7Gdie6QifObaHxeHflzff7nHtUlrYWfI',
        },
      }
    );
    console.log(resp);
    const data = await resp.json();
    console.log(data);
    this.setState({ userExperciences: data });
    this.setState({ isLoading: false });
  };

  componentDidMount = () => {
    this.fetchUser();
    // const usersExtraDetailsFromLS = localStorage.getItem('usersExtra');
    // if (usersExtraDetailsFromLS) {
    //   this.setState({ usersExtraDetails: JSON.parse(usersExtraDetailsFromLS) });
    // } else {
    //   localStorage.setItem(
    //     'usersExtra',
    //     JSON.stringify(this.state.usersExtraDetails)
    //   );
    // }
  };

  componentDidUpdate = (prevProp, prevState) => {
    if (prevState.user !== this.state.user) {
      this.fetchExperiences();
    }
    // localStorage.setItem(
    //   'usersExtra',
    //   JSON.stringify(this.state.usersExtraDetails)
    // );
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
