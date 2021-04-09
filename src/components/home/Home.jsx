import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Main from './main-component/Main';
import Side from './side-col/Side';

export default class Home extends Component {
  state = {
    user: {},
    isLoading: true,
    userLogged: null,
    experiences:[]
  };
  fetchExp = async (id) => {
    // console.log(this.props);
    // console.log(this.props.userLogged);
    // console.log(this.props.match.params.id);

    // const idToFetch =
    //   this.props.match.params.id === 'me'
    //     ? this.props.userLogged._id
    //     : this.props.match.params.id;

    const resp = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMWEyNzZmZDIyODAwMTUzZmRiYjEiLCJpYXQiOjE2MTc2OTczMTksImV4cCI6MTYxODkwNjkxOX0.bSzAALu5Ose7Gdie6QifObaHxeHflzff7nHtUlrYWfI',
        },
      }
    );

    const data = await resp.json();
    console.log(data);
    this.setState({ experiences: data });
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
    this.fetchExp(data._id)
    // console.log(data);
    // console.log(this.state.user);
  };

  getUserLogged = async () => {
    const resp = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/me`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMWEyNzZmZDIyODAwMTUzZmRiYjEiLCJpYXQiOjE2MTc2OTczMTksImV4cCI6MTYxODkwNjkxOX0.bSzAALu5Ose7Gdie6QifObaHxeHflzff7nHtUlrYWfI',
        },
      }
    );
    const userLogged = await resp.json();
    this.setState({ userLogged });
    // console.log(userLogged, 'logged in!!');
  };

  componentDidMount = () => {
    // console.log(this.props.match);
    // console.log(this.props.match.params);
    //this.getUserLogged();
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
          <Main
            userLogged={this.state.userLogged?._id}
            user={this.state.user}
            experiences={this.state.experiences}
          />
          <Side user={this.state.user} />
        </Row>
      </Container>
    );
  }
}
