import React from 'react';
import { Link } from 'react-router';
import DueDate from './due_date';

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

  render() {
    const { title, author, done, id, todoer, description, dueDate } = this.props.todo;
    const toggleTodo = this.props.toggleTodo;

    return (
      <li className="todo-item">
        <div className={`checkbox ${done}`}>
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="checkbox-input"
              checked={done}
              onChange={this.checkTodo()} />
              <span className="checkbox-button"></span>
          </label>
            <span className="checkbox-content">
              <ul className="checkbox-content-list group">
                <li><Link to={`/todos/${id}`} >{title}</Link></li>
                <li><span className="todoer">{todoer}</span></li>
                <li>
                  <DueDate dueDate={dueDate}/>
                </li>
              </ul>
            </span>
        </div>
      </li>
    );
  }
}


export default Todo;
