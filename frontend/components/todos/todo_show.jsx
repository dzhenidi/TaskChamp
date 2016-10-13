import React from 'react';
import { Link } from 'react-router';
import DueDate from './due_date';
import BodyClassName from 'react-body-classname';
import TodoFormContainer from './todo_form_container';
import CommentsIndexContainer from '../comments/comments_index_container';


class TodoShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hidden: true
    };
    this.hideForm = this.hideForm.bind(this);
    this.markDone = this.markDone.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  componentDidMount() {
    this.props.requestTodo(this.props.id);
  }


  toggleHidden(e){
    this.setState({hidden: !this.state.hidden});
  }

  hideForm(){
    this.setState({hidden: true});
  }

  markDone(){
    let todo = this.props.todo[this.props.id];
    todo.done = 'true';
    this.props.updateTodo(todo);
  }

  checkTodo() {
    return e => {
      this.setState({done: !this.props.todo.done});
      this.props.toggleTodo(this.props.todo);
    };
  }

  doneButton(){
    let done = this.props.todo[this.props.id].done;
    if (!done) {
      return (
        <button
          className="mark-done button"
          onClick={this.markDone}>Mark this done!
        </button>
      );
    } else {
      return (
        <span className="mark-done button">✓</span>
      );
    }
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
                  onClick={this.toggleHidden}>Edit
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
                      {this.doneButton()}
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
                    <td className="todo-detail">{todo.todoer}</td>
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
              action="update"
              hidden={this.state.hidden}
              hideForm={this.hideForm}/>
            <div className="comments-container">
              <CommentsIndexContainer commentIds={todo.commentIds}/>
            </div>
          </div>
        </BodyClassName>

      );
    }
  }
}


export default TodoShow;
