import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  checkTodo(value) {
    return (e) => {
      console.log(value);
      // debugger
    };
  }
  render() {
    const { title, author, dueDate, done, id } = this.props.todo;
    const toggleTodo = this.props.toggleTodo;

    return (
      <li className="todo-item">
        <label>
          <input type="checkbox" checked={done} onChange={toggleTodo(this.props.todo)} />
          {title}
        </label>
      </li>
    );
  }
}


export default Todo;
