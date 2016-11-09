import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: this.props.imageUrl || null,
      imageFile: null
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("user[avatar]", this.state.imageFile);
    this.props.updateProfile(this.props.currentUser.id, formData);
  }

  render() {
    return (
      <div>
        <img src={this.props.currentUser.avatarUrl} className="user-thumbnail"/>
        <div>Upload Profile Picture</div>
        <form
          className="profile-form"
          onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="file"
            onChange={this.updateFile}/>
          <img src={this.state.imageUrl}/>
          <button
            className="small home-button"
            >Save</button>
        </form>
      </div>
    );
  }
}

export default UserProfile;