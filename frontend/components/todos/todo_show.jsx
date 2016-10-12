import React from 'react';
import { Link } from 'react-router';
import DueDate from './due_date';
import BodyClassName from 'react-body-classname';
import TodoFormContainer from './todo_form_container';

class TodoShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hidden: false
    };
    this.hideForm = this.hideForm.bind(this);
  }

  componentDidMount() {
    this.props.requestTodo(this.props.id);
  }

  displayEditForm(){

  }

  markDone(){

  }

  hideForm(){
    this.setState({hidden: true});
  }


  render() {
    let todo = this.props.todo[this.props.id];


    if (!todo) {
      return(
        <div></div>
      );
    } else {
      return(
        <BodyClassName className='body-home'>
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
                    <th className="todo-title">
                      <button
                        className="mark-done button"
                        onClick={this.markDone}>Mark this done!
                      </button>
                    </th>
                    <td className="todo-title">
                      <div>
                        <ul>
                          <li className="todo-header">
                            {todo.title}
                          </li>
                          <li className="author-info">
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
                    <td className="todo-detail">{todo.todoer.username}</td>
                  </tr>
                  <tr>
                    <th>Notes</th>
                    <td className="todo-detail">
                      <div dangerouslySetInnerHTML={{__html:todo.description}}/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
            <TodoFormContainer
              todo={todo}
              hidden={this.state.hidden}
              hideForm={this.hideForm}/>
          </div>
        </BodyClassName>

      );
    }
  }
}


export default TodoShow;
