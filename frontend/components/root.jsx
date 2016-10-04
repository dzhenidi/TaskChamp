import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import { Provider   }  from 'react-redux';
import SessionFormContainer from './session/session_container';
import { requestTeamNames } from '../actions/session_action';

const Root = ({ store }) => {



  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace("/");
    };
  }

  const _requestTeamNamesOnEnter = () => {
    store.dispatch(requestTeamNames());
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } />
        <IndexRoute path="/" component= {SignupFormContainer} onEnter={ requestTeamNamesOnEnter } />
        <Route path="/login" component={ SessionFormContainer } onEnter = { _redirectIfLoggedIn }/>
        <Route path="/signup" component={ SessionFormContainer } onEnter= { _redirectIfLoggedIn }/>
      </Router>
    </Provider>
  );

};


export default Root;
