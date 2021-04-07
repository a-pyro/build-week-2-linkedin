import React, { Component } from 'react';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewFancyHome from 'components/Pages/NewFancyHome';
import SomeTempCompo from 'components/Pages/SomeTempCompo';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={NewFancyHome} />
          <Route path='/profile/me' component={Home} />
          <Route path='/profile/:id' component={Home} />
        </Switch>
      </Router>
    );
  }
}
