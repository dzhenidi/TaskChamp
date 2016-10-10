import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: this.props.todo.done
    };
  }

  checkTodo() {
    return e => {
      this.setState({done: !this.props.todo.done});
      this.props.toggleTodo(this.props.todo);
    };
  }

  dueDate(){
    const {dueDate} = this.props.todo;
    if (dueDate.length === 0) {
      return (<div></div>);
    } else {

      let month = dueDate[0];
      let day = dueDate[1];

      return (
        <span className="date short">
          <div className="date-header">{month}</div>
          <div className="date-day">{day}</div>
        </span>
      );
    }
  }
  
  render() {
    const { title, author, done, id, todoer } = this.props.todo;
    const toggleTodo = this.props.toggleTodo;
    return (
      <li className="todo-item">
        <div className="checkbox">
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox-input" checked={done} onChange={this.checkTodo()} />
            <span className="checkbox-content">
              <ul className="checkbox-content-list group">
                <li><a href="">{title}</a></li>
                <li><span className="todoer">{todoer.username}</span></li>
                <li>
                  {this.dueDate()}
                </li>
              </ul>
            </span>
          </label>
        </div>
      </li>
    );
  }
}


export default Todo;
