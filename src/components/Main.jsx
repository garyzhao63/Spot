import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import FindContainer from './FindContainer';
import PostContainer from './PostContainer';
import AccountContainer from './AccountContainer';

export default class Main extends Component {
  state = {};

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/find' component={FindContainer} />
          <Route exact path='/post' component={PostContainer} />
          <Route exact path='/account' component={AccountContainer} />
        </Switch>
      </main>
    );
  }
}