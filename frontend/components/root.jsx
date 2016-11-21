import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import App from './app';
import { Provider   }  from 'react-redux';
import SessionFormContainer from './session/session_container';
import { requestTeamNames } from '../actions/teams_action';
import SignupFormContainer from './signup/signup_container';
import ProjectsIndexContainer from './projects/project_index_container';
import GreetingContainer from './greeting/greeting_container';
import TodoShowContainer from './todos/todo_show_container';
import ProjectShowContainer from './projects/project_show_container';
import ProjectItemContainer from './projects/project_item_container';
import ScheduleContainer from './schedule/schedule_container';
import UserProfileContainer from './user/user_profile_container';
import EventShowContainer from './schedule/event_show_container';


const Root = ({ store }) => {


  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace("/");
    }
  };

  const _requestTeamNamesOnEnter = (nextState, replace, asyncDoneCallback) => {
      store.dispatch(requestTeamNames(asyncDoneCallback));
  };


  const _redirectUnlessLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace("/signup");
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } onEnter={_redirectUnlessLoggedIn}>
          <IndexRoute component={ ProjectsIndexContainer } />
          <Route path="/projects" component={ ProjectsIndexContainer } />
          <Route path="/profile" component={ UserProfileContainer } />
          <Route path="/schedule" component={ ScheduleContainer } />
          <Route path="/todos/:id" component={ TodoShowContainer } />
          <Route path="/projects/:id" component={ ProjectShowContainer } />
          <Route path="/events/:id" component={ EventShowContainer } />
        </Route>
        <Route path="/login" component={ SessionFormContainer } onEnter = { _redirectIfLoggedIn }/>
        <Route path="/signup" component={ SignupFormContainer } onEnter= { _requestTeamNamesOnEnter }/>
      </Router>
    </Provider>
  );

};

export default Root;
