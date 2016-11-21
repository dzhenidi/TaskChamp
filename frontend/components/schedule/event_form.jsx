import React from 'react';
const queryString = require('query-string');
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {Link} from 'react-router';

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      title: '',
      description: '',
      starts: moment(),
      ends: moment()
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.eventPostUrl = this.eventPostUrl.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createEvent({
      title: this.state.title,
      description: this.state.description,
      start_date: moment(this.state.starts).format("YYYY-MM-DD, h:mm:ss a"),
      end_date: moment(this.state.ends).format("YYYY-MM-DD, h:mm:ss a")
    });
  };

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  // eventPostUrl(){
  //   let qS = queryString.stringify({
  //     action: "TEMPLATE",
  //     text: this.state.title,
  //     dates: moment(this.state.starts).format() + '/' + moment(this.state.ends).format()
  //   })
  //   let href = "http://www.google.com/calendar/event?"
  //   const text = "My event"
  //   const dates = "20161121T143000/20161121T163000"
  // const url = http://www.google.com/calendar/event?action=template&dates=20161121T143000/20161121T163000
  //   return <a href={href + qS} target="_blank">Add to Your Google Calendar</a>
  // }

  setStartDate(d) {
    this.setState({
      "starts": d
    })
  }
  setEndDate(d) {
    this.setState({
      "ends": d
    })
  }

  render(){
    let qS = queryString.stringify({
      action: "TEMPLATE",
      text: this.state.title,
      dates: moment(this.state.starts).format('YYYYMMDD') + '/' + moment(this.state.ends).format('YYYYMMDD')
    })
    let href = "http://www.google.com/calendar/event?"


    if (this.props.hidden) {
      return (<div></div>);
    } else {
      return (
        <div className="event-form">
          <form
            onSubmit={this.handleSubmit}>
            <input
              className="input"
              value={this.state.title}
              onChange={this.update("title")}
              placeholder="What is your event?"/>
            <DatePicker
              selected={this.state.starts}
              onChange={this.setStartDate}
              placeholderText="Starts..." />
              <DatePicker
                selected={this.state.ends}
                onChange={this.setEndDate}
                placeholderText="Ends..." />
            <div className="buttons-container group">
              <button
                className="small home-button"
                >Submit
              </button>
              <button
                className="small cancel home-button"
                onClick={this.handleCancel}>Cancel
              </button>
            </div>
          </form>
          <a href={href + qS} target="_blank">Add to Your Google Calendar</a>
        </div>
      )
    }
  }

}

export default EventForm;
