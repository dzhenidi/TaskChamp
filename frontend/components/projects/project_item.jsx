import React from 'react';
import Todo from '../todos/todo';
import TodoFormContainer from '../todos/todo_form_container';

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
    this.toggleHidden = this.toggleHidden.bind(this);
    this.completedTodos = this.completedTodos.bind(this);
    this.remainingTodos = this.remainingTodos.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  toggleHidden(e){
    this.setState({hidden: !this.state.hidden});
  }

  hideForm(){
    this.setState({hidden: true});
  }


  completedTodos() {
    const toggleTodo = this.props.toggleTodo;
    const { todos } = this.props.project;

    const todoKeys = Object.keys(todos);
    return todoKeys.map( idx => {
      let todo = todos[idx];
      if (todo.done) {
        return (
          <Todo
            key={idx}
            todo={todo}
            toggleTodo={toggleTodo} />
        );

      }
    });
  }

  remainingTodos() {
    const toggleTodo = this.props.toggleTodo;
    const { todos } = this.props.project;

    const todoKeys = Object.keys(todos);
    return todoKeys.map( idx => {
      let todo = todos[idx];
      if (!todo.done) {
        return (
          <Todo
            key={idx}
            todo={todo}
            toggleTodo={toggleTodo} />
        );

      }
    });
  }

  render(){
    const { id, title, description } = this.props.project;

    return (
      <li className="project-item">
        <header className="project-item-header">
          <h3>{title}
            <a href=""></a>
          </h3>
          <p className="project-item-description">{description}</p>
          <ul className="todos remaining">
            { this.remainingTodos() }
          </ul>
          <button
            className="small home-button"
            onClick={this.toggleHidden}>Add a to-do
          </button>
          <ul className="todos add">
            <TodoFormContainer
              action="create"
              projectId={id}
              hidden={this.state.hidden}
              hideForm={this.hideForm}/>
          </ul>
          <ul className="todos completed">
            { this.completedTodos() }
          </ul>
        </header>
      </li>
    );
  }
}

export default ProjectItem;
