import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import { Provider   }  from 'react-redux';
import SessionFormContainer from './session/session_container';
import { requestTeamNames } from '../actions/teams_action';
import SignupFormContainer from './signup/signup_container';


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
        <Route path="/" component={ App }>
          <Route path="/login" component={ SessionFormContainer } onEnter = { _redirectIfLoggedIn }/>
          <Route path="/signup" component={ SignupFormContainer } onEnter= { _requestTeamNamesOnEnter }/>
        </Route>
      </Router>
    </Provider>
  );

};


export default Root;
