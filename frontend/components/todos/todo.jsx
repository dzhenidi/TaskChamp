import React from 'react';
import { Link } from 'react-router';
import DueDate from './due_date';
import moment from 'moment';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: this.props.todo.done
    };
  }

  checkTodo() {
    return e => {
      let formData = new FormData();
      formData.append("todo[done]", !this.state.done);
      this.props.toggleTodo(this.props.todo.id, formData);
      this.setState({done: !this.props.todo.done});
    };
  }

  render() {
    const { title, author, done, id, todoer, description, due_date } = this.props.todo;
    const toggleTodo = this.props.toggleTodo;
    const mon = moment(due_date).format("MMM");
    const day = moment(due_date).format("DD");
    let dueDate = [mon, day];

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
                  <DueDate dueDate={dueDate} format="short"/>
                </li>
              </ul>
            </span>
        </div>
      </li>
    );
  }
}


export default Todo;
