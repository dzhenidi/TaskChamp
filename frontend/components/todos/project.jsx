import React from 'react';
import Todo from './todo';


class Project extends React.Component {

  componentDidMount() {
    this.props.requestTodos();
  }
  render() {
    const todos = this.props.todo.map( ({id, title, todoer, done }) => {
      return(
        <li key={id}>
          <Todo
            title={title}
            todoer={todoer}
            done={done}
            />
        </li>
      )
    });

    return (
      <div>
        <h2>Todos go here:</h2>
        <ul>

          {todos}
        </ul>
      </div>
    )
  }

}

export default Project;
