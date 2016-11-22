import React from 'react';
import queryString from 'query-string';
import moment from 'moment';


class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    debugger
    this.props.requestEvent(this.props.id);
  }

  render() {
    const event = this.props.scheduleEvent;
    debugger
    if (event) {
      let qS = queryString.stringify({
        action: "TEMPLATE",
        text: event.title,
        dates: moment(event.startDate).format('YYYYMMDD') + '/' + moment(event.endDate).format('YYYYMMDD')
      });
      let href = "http://www.google.com/calendar/event?";
      return (
        <div>
          <h2>
            {this.props.scheduleEvent.title}
          </h2>
          <a href={href + qS} target="_blank">Add to Your Google Calendar</a>

        </div>

      )
    } else {
      return (
        <h1>Loading event...</h1>
      )
    }
  }
}

export default EventShow;
