import React from 'react';

class Todo extends React.Component {


  render() {
    debugger
    const { title, author, dueDate } = this.props;

    return (
      <li>{title}</li>
    );
  }
}


export default Todo;
