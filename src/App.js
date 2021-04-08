import React, { Component } from 'react';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsFeed from 'components/Pages/NewsFeed';
import TempNavBar from 'components/TempNavBar';

import Footer from './components/Footer';

// import NavBar from './components/NavBar';

export default class App extends Component {
  state = {
    loggeUser: null,
  };

  setLoggedUser = (user) => this.setState({ loggeUser: user });

  render() {
    return (
      <Router>
        <TempNavBar />
        {/* <NavBar /> */}
        <Switch>
          <Route path='/' exact component={NewsFeed} />
          {/* <Route path='/profile/:id' component={Home} /> */}
          <Route path='/profile/:id' component={Home} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
