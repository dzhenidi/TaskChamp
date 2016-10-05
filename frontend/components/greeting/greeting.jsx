import React from 'react';
import { Link } from 'react-router';


class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    const currentUser = this.props.currentUser;
    if (currentUser) {
      return (
        <div className='welcome'>
          <h2>Welcome, {currentUser.username}</h2>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      return (
        // <li><Link to="/login">Log In</Link></li>
        <div>returning from greeting</div>
      );
    }
  }
}

export default Greeting;
