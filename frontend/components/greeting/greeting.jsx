import React from 'react';
import { Link, hashHistory } from 'react-router';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps){
    const currentUser = nextProps.currentUser;
    if (!currentUser) {
      hashHistory.push("/signup");
    }
  }

  render(){
    const currentUser = this.props.currentUser;
    if (currentUser) {
      return (
        <div className='welcome'>
          <h2>Welcome, {currentUser.username}</h2>
          <button onClick={this.props.logout}>Logout</button>
          <Link to='/projects'>Projects Page</Link>
        </div>
      );
    } else {
      return (<p>Returning from greeting</p>);
    }
  }
}

export default Greeting;
