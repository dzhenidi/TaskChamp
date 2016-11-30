import React from 'react';
import { Link } from 'react-router';
import DueDate from '../todos/due_date';
import BodyClassName from 'react-body-classname';
import EventFormContainer from './event_form_container';
import moment from 'moment';
const MONTHS = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisMonth: new Date().getMonth(),
      hidden: true
    };
    this.month = this.month.bind(this);
    this.monthTodos = this.monthTodos.bind(this);
    this.showEventForm = this.showEventForm.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  componentDidMount() {
    this.props.requestTodos();
    this.props.requestEvents();
  }

  month() {
    return (MONTHS[this.state.thisMonth]);
  }

  monthTodos(){
    let todosByMonth = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: []};

    let todos = this.props.todos.concat(this.props.eventsSorted);
    // todos.forEach ( todo => {
    //     if (todo.dueMonth) {
    //       let todoMonth = (parseInt(todo.dueMonth) - 1);
    //       todosByMonth[todoMonth].push(todo);
    //     }
    // });
    todos.forEach ( todo => {
      let month;
      if (todo.due_date) {

        month = moment(todo.due_date).utcOffset(todo.due_date).format("M");
      } else if (todo.startDate) {
        month = moment(todo.startDate).utcOffset(todo.startDate).format("M");
      }
      let todoMonth = (parseInt(month) - 1);
      todosByMonth[todoMonth].push(todo);
    });
    let current = this.state.thisMonth;
    let monthKeys = Object.keys(todosByMonth);
    let orderedKeys = monthKeys.slice(current).concat(monthKeys.slice(0, current));
    //renders todos with title and link
    function todoGroup(todos) {
      let dueDate;
      let showItemLink;
      let eventDetails;

      return todos.map ( todo => {
        if (todo.dueDate){
          dueDate = todo.dueDate;
          showItemLink = `/todos/${todo.id}`;
          eventDetails = `For: ${todo.projectName}`;
        } else {
          const mon = moment(todo.startDate).format("MMM");
          const day = moment(todo.startDate).format("DD");
          dueDate = [mon, day];
          showItemLink = `/events/${todo.id}`;
          const participants = todo.participants.map( user => <li>{user.username}</li> );
          eventDetails = <ul><li>With:</li>{participants}</ul>;
        }
        return (
          <span className="checkbox-content schedule">
            <ul className="checkbox-content-list schedule group">
              <li key={todo.id}>
                <DueDate dueDate={dueDate} format="short"/>
              </li>
              <li className="title-link">
                <Link to={showItemLink}>
                  {todo.title}
                </Link>
              </li>
              <li>
                <span className="project-title">
                  <div className="event-details">
                    {eventDetails}
                  </div>
                </span>
              </li>
            </ul>
          </span>
        );}
      );
    }

    //renders months and corresponding todos
    return orderedKeys.map ( month => {
      return (
        <div className={"month-container " + MONTHS[month]}>
          <header className={"month " + MONTHS[month]}>
            {MONTHS[month]}
          </header>
            {todoGroup(todosByMonth[month])}
        </div>
      );
    });
  }

  toggleHidden(e){
    this.setState({hidden: !this.state.hidden});
  }

  showEventForm(){
    this.toggleHidden();
  }

  hideForm(){
    this.setState({hidden: true});
  }

  render(){
    let todos = this.props.todos;
    if (Object.keys(todos).length === 0) {
      return(
        <div></div>
      );
    } else {
      return (
        <BodyClassName className='body-home'>

          <div className="schedule-container">
            <header className="section-header">
              <h1 className="schedule-heading">Schedule</h1>
            </header>
            <button
              className= "big home-button"
              onClick={this.showEventForm}>Add event
            </button>
            <div className="expandable-project-form">
              <EventFormContainer
                hidden={this.state.hidden}
                hideForm={this.hideForm} />
            </div>
            <header>
              {this.monthTodos()}
            </header>
          </div>
        </BodyClassName>

      );
    }
  }
}

export default Schedule;
