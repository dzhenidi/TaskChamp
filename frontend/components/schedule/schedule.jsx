import React from 'react';
import { Link } from 'react-router';
import DueDate from '../todos/due_date';

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
      thisMonth: new Date().getMonth()
    };
    this.month = this.month.bind(this);
    this.monthTodos = this.monthTodos.bind(this);
  }

  componentDidMount() {
    this.props.requestTodos();
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

    let todos = this.props.todos;
    todos.forEach ( todo => {
        if (todo.dueMonth) {
          let todoMonth = (parseInt(todo.dueMonth) - 1);
          todosByMonth[todoMonth].push(todo);
        }
    });
    let current = this.state.thisMonth;
    let monthKeys = Object.keys(todosByMonth);
    let orderedKeys = monthKeys.slice(current).concat(monthKeys.slice(0, current));

    function todoGroup(todos) {
      return todos.map ( todo =>
        <span className="checkbox-content schedule">
          <ul className="checkbox-content-list schedule group">
            <li>
              <DueDate dueDate={todo.dueDate}/>
            </li>
            <li><Link to={`/todos/${todo.id}`} >{todo.title}</Link></li>
            <li><span className="todoer">{todo.projectName}</span></li>
          </ul>
        </span>
      );
    }
    return orderedKeys.map ( month => {
      return (
        <div className="month-container">
          <header>
            {MONTHS[month]}
          </header>
            {todoGroup(todosByMonth[month])}
        </div>
      );
    });
  }


  render(){
    let todos = this.props.todos;
    if (Object.keys(todos).length === 0) {
      return(
        <h1> hello from schedule</h1>
      );
    } else {
      return (
        <div className="schedule-container">
          <header className="section-header">
            <h1 className="schedule-heading">Schedule</h1>
          </header>
          <header>
            {this.monthTodos()}
          </header>
        </div>
      );
    }
  }
}

export default Schedule;
