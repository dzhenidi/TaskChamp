import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './signup/signup_container';
import ProjectContainer from './projects/project_index_container';

const App = ({ children }) => {


  return (
    <div>
      <GreetingContainer />
      {children}
    </div>
)};

export default App;
