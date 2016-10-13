import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './signup/signup_container';
import ProjectContainer from './projects/project_index_container';
import { connect } from 'react-redux';
import { Link, hashHistory } from 'react-router';
class App extends React.Component {
  constructor(props){
    super(props);
  }


  shouldComponentUpdate(nextProps){
    const currentUser = nextProps.currentUser;
    if (!currentUser) {
      hashHistory.push('/signup');
      return false
    } else {
      return true
    }

  }

render() {
  debugger
  return (
    <div>
      <GreetingContainer />
      {this.props.children}
    </div>
  )};

}

// export default App;

const mapStateToProps = ({session}) => {

  return ({
    currentUser: session.currentUser
  });
}

export default connect(
  mapStateToProps
)(App);
