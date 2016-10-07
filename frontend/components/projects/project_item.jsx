import React from 'react';
import Todo from '../todos/todo';


class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { id, title, description, todos } = this.props;
    const todoIds = Object.keys(todos);
    const todoItems = todoIds.map(id => {
      const { title, author, dueDate} = todos[id];
      return (

        <Todo
          key={id}
          title={title}
          author={author}
          dueDate={dueDate} />
      );
    });
    
    return (
      <li className="project-item">
        <header className="project-item-header">
          <h3>{title}
            <a href=""></a>
          </h3>
          <p>{description}</p>
          <ul className="todo-list">
            { todoItems }
          </ul>
        </header>
      </li>
    );
  }
}

export default ProjectItem;
