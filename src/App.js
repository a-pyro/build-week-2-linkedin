import React, { Component } from 'react';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsFeed from 'components/Pages/NewsFeed';
import TempNavBar from 'components/TempNavBar';

import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <Router>
        <TempNavBar />
        <Switch>
          <Route path='/' exact component={NewsFeed} />
          <Route path='/profile/:id' component={Home} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
