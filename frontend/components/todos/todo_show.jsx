import React from 'react';
import { Link } from 'react-router';
import DueDate from './due_date';


class TodoShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestTodo(this.props.id);
  }

  displayEditForm(){

  }

  markDone(){

  }

  render() {
    let todo = this.props.todo[this.props.id];


    if (!todo) {
      return(
        <div></div>
      );
    } else {
      return(
        <div className="todo-show-container">
          <ul className="buttons-list group">
            <li>
              <button
                className="small home-button"
                onClick={this.displayEditForm}>Edit
              </button>
            </li>
          </ul>

          <div className="nav-history">
            From: <Link to='/projects'>Projects</Link>{todo.poject_id} > <a href="">{todo.projectName}</a>
          </div>

          <section className="todo-details-container">
            <table className="todo-table">
              <tbody>
                <tr>
                  <th>
                    <button
                      className="mark-done button"
                      onClick={this.markDone}>Mark Done
                    </button>
                  </th>
                  <td>
                    <div>
                      <ul>
                        <li>
                          {todo.title}
                        </li>
                        <li>
                          user {todo.author} added this on {todo.createdAt}
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Due on</th>
                  <td><DueDate dueDate={todo.dueDate}/></td>
                </tr>
                <tr>
                  <th>Assigned to</th>
                  <td>{todo.todoer.username}</td>
                </tr>
                <tr>
                  <th>Notes</th>
                  <td>{todo.description}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      );
    }
  }
}


export default TodoShow;
