import React from 'react';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.scheduleEvent) {
      return (
        <div>{this.props.scheduleEvent.title}</div>
      )
    } else {
      return (
        <h1>No event yet</h1>
      )
    }
  }
}

export default EventShow;
