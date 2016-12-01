import React from 'react';
const queryString = require('query-string');

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: this.props.currentUser.avatarUrl || null,
      imageFile: null,
      events: [],
      name: this.props.currentUser.username
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.connectGoogle = this.connectGoogle.bind(this);
    this.checkAuth = this.checkAuth.bind(this);
    this.handleAuthResult = this.handleAuthResult.bind(this);
    this.listUpcomingEvents = this.listUpcomingEvents.bind(this);
    this.receiveEvents = this.receiveEvents.bind(this);
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

  connectGoogle() {
    const hasgapi = () => {
      if (typeof (gapi) !== "undefined") {
        this.checkAuth();
      }
      else {
          window.setTimeout(function () {
              hasgapi();
          }, 50);
      }
    }

    return hasgapi();
  }

  checkAuth() {
    gapi.auth.authorize(
    {
      'client_id': "973738423213-k7uovumgqvn7j2b1knf7lkb5lm331op7.apps.googleusercontent.com",
      'scope': "https://www.googleapis.com/auth/calendar",
      'immediate': true
    }, this.handleAuthResult);
  }

  handleAuthResult (authResult) {
    if (authResult && !authResult.error) {
      this.loadCalendarApi();
    } else {
      //handle error
    }
  }

  loadCalendarApi() {
    gapi.client.load('calendar', 'v3', this.listUpcomingEvents)
  }

  listUpcomingEvents() {
    // const request = gapi.client.calendar.events.list({
    //   'calendarId': 'primary',
    //   'timeMin': (new Date()).toISOString(),
    //   'maxResults': 10,
    //
    // });
    const event = {
      'summary': 'hello from taskchamp',
      'location': 'the pulpit',
      'start': {
        'dateTime': '2016-11-19T20:00:00-05:00'
      },
      'end': {
        'dateTime': '2016-11-19T22:00:00-05:00'
      },
    };
    const request = gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': event
    });

    request.execute(resp => this.receiveEvents(resp));
  }

  receiveEvents(resp) {
    this.setState({events: resp.items})
  }

  calendarEvents(){
    return this.state.events.map( (event, idx) => (
      <li id={idx}>{event.start.dateTime}: {event.summary}</li>
    ));
  }



  render() {
    return (
      <div className="profile-container">
        <h1>{this.state.name + "'s Profile"}</h1>
        <img src={this.state.imageUrl} className="user-thumbnail"/>
        <h2>Upload Profile Picture</h2>
        <form
          className="profile-form"
          onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="file"
            onChange={this.updateFile}/>
          <button
            className="small home-button"
            >Save</button>
        </form>
      </div>
    );
  }
}

// <button
//   onClick={this.connectGoogle}>Google Calendar
// </button>

export default UserProfile;
