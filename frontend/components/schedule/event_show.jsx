import React from 'react';
import queryString from 'query-string';
import moment from 'moment';
import BodyClassName from 'react-body-classname';
import DueDate from '../todos/due_date';

// https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20161127T131632/20161128T161932&text=aaaaaaa&sf=true&output=xml#main_7

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.renderDateTime = this.renderDateTime.bind(this);
    this.renderGCalLink = this.renderGCalLink.bind(this);
  }

  componentDidMount(){
    this.props.requestEvent(this.props.id);
  }

  renderDateTime(){
    // const startDate = moment(this.props.scheduleEvent.startDate);
    // const endDate = moment(this.props.scheduleEvent.endDate);
    const endDate = moment(this.props.scheduleEvent.endDate).utcOffset(this.props.scheduleEvent.endDate);
    const startDate = moment(this.props.scheduleEvent.startDate).utcOffset(this.props.scheduleEvent.startDate);
    // const offset = moment(this.props.scheduleEvent.startDate).format('Z')
    // const startDateOffset = startDate.utcOffset(this.props.scheduleEvent.startDate)
    // const testOffsetString = startDateOffset.format('dddd, MMMM Do, h:mma')
    // const dateString = `${startDate.format('YYYYMMDD[T]HHmmss')}/${endDate.format('YYYYMMDD[T]HHmmss')}`;

    let dateRange;
    if (startDate.isSame(endDate, 'day')) {
      dateRange = startDate.format('dddd, MMMM Do, h:mma')
      + " - "
      + endDate.format('h:mma');
    } else {
      dateRange = startDate.format('dddd, MMMM Do, h:mma')
      + " - "
      + endDate.format('dddd, MMMM Do, h:mma');
    }

    return (dateRange);
  }

  renderGCalLink() {
    const endDate = moment(this.props.scheduleEvent.endDate).utcOffset(this.props.scheduleEvent.endDate);
    const startDate = moment(this.props.scheduleEvent.startDate).utcOffset(this.props.scheduleEvent.startDate);
    const dateString = `${startDate.format('YYYYMMDD[T]HHmmss')}/${endDate.format('YYYYMMDD[T]HHmmss')}`;
    const event = this.props.scheduleEvent;
    const qS = queryString.stringify({
      action: "TEMPLATE",
      text: event.title,
      dates: dateString
    });
    const href = "http://www.google.com/calendar/event?";

    return (
      <a href={href + qS} target="_blank">
        Add to <img src={window.taskChampAssets.googleCalendarLogo}></img>
      </a>
    );
  }

  render() {
    const event = this.props.scheduleEvent;
    if (event) {
    //   const qS = queryString.stringify({
    //     action: "TEMPLATE",
    //     text: event.title,
    //     dates: `${moment(event.startDate).format('YYYYMMDD[T]HHmmss')}/${moment(event.endDate).format('YYYYMMDD[T]HHmmss')}`
    //   });
    //   const href = "http://www.google.com/calendar/event?";
      const dueDate = [moment(event.startDate).format('MMMM'), moment(event.startDate).format('D'), moment(event.startDate).format('dddd')];
      const participants = event.participants.map( user => {
        return (
          <img
            src={user.avatar}
            className="user-thumbnail"
            title={user.username}
            alt={user.username} />
        );
      });

      return (
        <BodyClassName className='body-home'>
          <div className= "project-show-container">
            <header className="scheduled-event">
              <DueDate dueDate={dueDate} format="long"/>
              <h3>
                {this.renderDateTime()}
              </h3>
              <h2>
                {event.title}
              </h2>
              <p>{event.description}</p>
              <div>
                {this.renderGCalLink()}
              </div>

              <div className="separator">
                <div className="avatar-group">
                  {participants}
                </div>
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
