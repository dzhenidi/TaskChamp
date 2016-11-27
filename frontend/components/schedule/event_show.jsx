import React from 'react';
import queryString from 'query-string';
import moment from 'moment';
import BodyClassName from 'react-body-classname';
import DueDate from '../todos/due_date';



class EventShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestEvent(this.props.id);
  }

  render() {
    const event = this.props.scheduleEvent;
    const participants = this.props.particpantsAvatars;
    if (event) {
      const qS = queryString.stringify({
        action: "TEMPLATE",
        text: event.title,
        dates: moment(event.startDate).format('YYYYMMDD') + '/' + moment(event.endDate).format('YYYYMMDD')
      });
      const href = "http://www.google.com/calendar/event?";
      const dueDate = [moment(event.startDate).format('MMMM'), moment(event.startDate).format('D'), moment(event.startDate).format('dddd')]

      return (
        <BodyClassName className='body-home'>
          <div className= "project-show-container">
            <header className="scheduled-event">
              <DueDate dueDate={dueDate} format="long"/>
              <h3>
                {moment(event.startDate).format('dddd, MMMM Do')}
              </h3>
              <h2>
                {event.title}
              </h2>

              <a href={href + qS} target="_blank">
                Add to <img src={window.taskChampAssets.googleCalendarLogo}></img>
              </a>
              <div className="avatar-group">
                {participants}
              </div>
            </header>
            <footer className="footer">
              <div>{event.author} posted this {moment(event.createdAt).calendar()}</div>

            </footer>
          </div>
        </BodyClassName>

      )
    } else {
      return (
        <h1>Loading event...</h1>
      )
    }
  }
}

export default EventShow;
