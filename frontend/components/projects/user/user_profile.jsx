import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    debugger
    return (
      <div>
        <img src={this.props.currentUser.avatar_url} className="user-thumbnail"/>
        <div>Upload Profile Picture</div>
      </div>
    );
  }
}

export default UserProfile;
