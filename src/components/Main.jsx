import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import {navConsts} from '../constants';
import FindContainer from './FindContainer';
import PostContainer from './PostContainer';
import AccountContainer from './AccountContainer';
import NotificationsContainer from './NotificationsContainer';

export default class Main extends Component {
  render() {
    const {ACCOUNT, FIND, POST, NOTIFICATIONS} = navConsts;

    return (
      <main className="App-container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path={'/' + FIND} component={FindContainer} />
          <Route exact path={'/' + POST} component={PostContainer} />
          <Route exact path={'/' + ACCOUNT} component={AccountContainer} />
          <Route exact path={'/' + NOTIFICATIONS} component={NotificationsContainer} />
        </Switch>
      </main>
    );
  }
  
}