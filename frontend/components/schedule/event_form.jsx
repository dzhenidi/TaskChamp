import React from 'react';
import queryString from 'query-string';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Link, hashHistory } from 'react-router';
import Select from 'react-select';
import TimePicker from 'rc-time-picker';

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      title: '',
      description: '',
      starts: moment(),
      ends: moment(),
      selectedTeammates: [],
      startTime: moment()
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUsersList = this.updateUsersList.bind(this);
    this.setStartDate = this.setStartDate.bind(this);
    this.setEndDate = this.setEndDate.bind(this);
    this.handleTimeStart = this.handleTimeStart.bind(this);
    this.handleTimeEnd = this.handleTimeEnd.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const startTime = this.state.startTime.format("h:mm:ss a");
    const endTime = this.state.endTime.format("h:mm:ss a");
    const startDate = moment(this.state.starts).format("YYYY-MM-DD");
    const endDate = moment(this.state.ends).format("YYYY-MM-DD");
    const usersIds = this.state.selectedTeammates.map( user => user.value);
    this.props.createEvent({
      title: this.state.title,
      description: this.state.description,
      // start_date: moment(this.state.starts).format("YYYY-MM-DD, h:mm:ss a"),
      start_date: `${startDate} ${startTime}`,
      end_date: `${endDate} ${endTime}`,
      // end_date: moment(this.state.ends).format("YYYY-MM-DD, h:mm:ss a"),
      users: usersIds,
    });
  };

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  // eventPostUrl(){
  //   let qS = queryString.stringify({
  //     action: "TEMPLATE",
  //er   text: this.state.title,
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
    });
  }
  setEndDate(d) {
    this.setState({
      "ends": d
    });
  }

  updateUsersList(val) {
    this.setState({
      'selectedTeammates': val
    });
  }

  handleTimeStart(val) {
    this.setState({
      'startTime': val
    });
  }
  handleTimeEnd(val) {
    this.setState({
      'endTime': val
    });
  }

  render(){
    let selectOptions = [];
    let teammates = this.props.teammates;
    for (let key in teammates) {
      if (teammates.hasOwnProperty(key)) {
        selectOptions.push({
          value: this.props.teammates[key],
          label: key
        });
      }
    }


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
              <h3>Starts At</h3>
              <TimePicker
                format="h:mm A"
                showSecond={false}
                onChange={this.handleTimeStart}/>
              <h3>Ends At</h3>
              <TimePicker
                format="h:mm A"
                showSecond={false}
                onChange={this.handleTimeEnd}/>
              <Select
                name="teammates"
                value={this.state.selectedTeammates}
                options={selectOptions}
                onChange={this.updateUsersList}
                multi={true}/>
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
        </div>
      );
    }
  }

}

export default EventForm;
