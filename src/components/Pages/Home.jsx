import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Main from '../home/main-component/Main';
import Side from '../home/side-col/Side';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  state = {
    user: {},
    isLoading: true,
    // userLogged: null,
    // experiences: [],
  };

  fetchUser = async (personToFetch) => {
    const token = localStorage.getItem('token');
    this.setState({ isLoading: true });
    const resp = await fetch(
      `${process.env.REACT_APP_API_URL}/api/profile/${personToFetch}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await resp.json();
    this.setState({ user: data });
    this.setState({ isLoading: false });
  };

  componentDidMount = () => {
    this.fetchUser(this.props.match.params.id);
  };

  componentDidUpdate = (prevProp, prevState) => {
    if (prevProp.match.params !== this.props.match.params) {
      this.fetchUser(this.props.match.params.id);
    }
  };

  render() {
    return (
      <Container>
        {this.props.children}
        <Row>
          <Main fetchUser={this.fetchUser} user={this.state.user} />
          <Side user={this.state.user} />
        </Row>
      </Container>
    );
  }
}

export default withRouter(Home);
