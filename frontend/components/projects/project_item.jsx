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
  }

  toggleHidden(e){
    this.setState({hidden: !this.state.hidden});
  }

  render(){
    const { id, title, description, todos } = this.props.project;
    const toggleTodo = this.props.toggleTodo;
    const todoItems = todos.map( todo => {

      return (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo} />
      );
    });

    return (
      <li className="project-item">
        <header className="project-item-header">
          <h3>{title}
            <a href=""></a>
          </h3>
          <p className="project-item-description">{description}</p>
          <button className="button" onClick={this.toggleHidden}>Add a to-do</button>
          <ul className="todo-list">
            { todoItems }
          </ul>
          <TodoFormContainer projectId={id} hidden={this.state.hidden}/>
        </header>
      </li>
    );
  }
}

export default ProjectItem;

// let todoItems;
// if (todos) {
//   const todoIds = Object.keys(todos);
//
//   const todoItems = todoIds.map(id => {
//     const { title, author, dueDate, done } = todos[id];
//     return (
//
//       <Todo
//         key={id}
//         title={title}
//         author={author}
//         dueDate={dueDate}
//         done={done} />
//     );
//   });
// } else {
//   todoItems = "";
// }
