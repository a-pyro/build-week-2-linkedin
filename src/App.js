import React, { Component } from 'react';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsFeed from 'components/Pages/NewsFeed';
import TempNavBar from 'components/shared/TempNavBar';

import Footer from './components/shared/Footer';
import Landing from 'components/Pages/registration/Landing';

// import NavBar from './components/NavBar';

export default class App extends Component {
  // state = {
  //   userLoggedId: null
  // }

  // fetchUser(id) => {
  //   fetch
  //   setState(id)
  // }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Landing} />
          {/* <Route
            path='/newsfeed'
            render={(routerProps) => {
              <NewsFeed {...routerProps}>
                <TempNavBar />
              </NewsFeed>;
            }}
          />
          <Route
            path='/profile/:id'
            render={(routerProps) => {
              <Home {...routerProps}>
                <TempNavBar />
              </Home>;
            }}
          /> */}
          <Route path='/newsfeed'>
            <NewsFeed>
              <TempNavBar />
            </NewsFeed>
          </Route>

          <Route path='/profile/:id'>
            <Home>
              <TempNavBar />
            </Home>
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}
