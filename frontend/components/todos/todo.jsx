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
    // return (e) => {
    //   console.log(value);
    //   // debugger
    // };
  }
  render() {
    const { title, author, dueDate, done, id } = this.props.todo;
    const toggleTodo = this.props.toggleTodo;
    return (
      <li className="todo-item">
        <div className="checkbox">
          <label className="checkbox-label">
            <input type="checkbox" className="checkbox-input" checked={done} onChange={this.checkTodo()} />
            {title}
          </label>
        </div>
      </li>
    );
  }
}


export default Todo;
