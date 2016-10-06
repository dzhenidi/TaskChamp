import React from 'react';

class Todo extends React.Component {


  render() {

    return (
      <ul>
        <li>
          {this.props.title}
        </li>
        <li>
          {this.props.todoer}
        </li>
      </ul>
    );}
}


export default Todo;
