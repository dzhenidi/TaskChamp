import React from 'react';
import { Link } from 'react-router';
import DueDate from './due_date';
import BodyClassName from 'react-body-classname';
import TodoFormContainer from './todo_form_container';
import CommentsIndexContainer from '../comments/comments_index_container';
import { DisplayFiles } from '../files/display_files';
import moment from 'moment';

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
    this.todoTable = this.todoTable.bind(this);
    this.fileUrl = this.props.fileUrl || null;
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
    let formData = new FormData();
    formData.append("todo[done]", "true");
    this.props.updateTodo(this.props.id, formData);
  }

  checkTodo() {
    return e => {
      this.setState({done: !this.props.todo.done});
      this.props.toggleTodo(this.props.todo);
    };
  }

  // displayFiles(todo) {
  //   if (todo.fileUrl) {
  //     if (["image/jpeg", "image/gif", "image/png"].includes(todo.fileType)) {
  //       return (
  //         <div className="attachment">
  //           <img src={ todo.fileUrl || ''}>
  //           </img>
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div className="attachment">
  //           <a target="_blank" href={ todo.fileUrl || ''}>Download {todo.fileName}
  //           </a>
  //         </div>
  //       );
  //     }
  //   } else {
  //     return <div></div>;
  //   }
  // }

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
        <button className="mark-done button done">✓</button>
      );
    }
  }

  todoTable(){
    let todo = this.props.todo[this.props.id];
    const mon = moment(todo.due_date).format("MMM");
    const day = moment(todo.due_date).format("DD");
    let dueDate = [mon, day];
    if (this.state.hidden) {
      return (
        <section className="todo-details-container">
          <table className="todo-table">
            <tbody>
              <tr>
                <td className="todo-title">
                  {this.doneButton()}
                </td>
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
                <td><DueDate dueDate={dueDate} format="short"/></td>
              </tr>
              <tr>
                <th>Assigned to</th>
                <td className="todo-detail">{todo.todoer}</td>
              </tr>
              <tr>
                <th>Notes</th>
                <td className="todo-detail last">
                  <div dangerouslySetInnerHTML={{__html:todo.description}}/>
                  { todo.fileUrl ? <DisplayFiles
                                    fileName={todo.fileName}
                                    fileType={todo.fileType}
                                    fileUrl={todo.fileUrl}/> : null }
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      );
    } else {
      return (
        <div></div>
      );
    }
  }


  render() {
    let todo = this.props.todo[this.props.id];

    if ((!todo) || (!todo.commentIds)){
      return(
        <div></div>
      );
    } else {
      return(
        <BodyClassName className='body-home'>
          <div>

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

            {this.todoTable()}
            <TodoFormContainer
              todo={todo}
              action="update"
              hidden={this.state.hidden}
              hideForm={this.hideForm}/>
          </div>
          <div className="comments-container">
            <CommentsIndexContainer
              commentIds={todo.commentIds}
              commentableId={todo.id}
              commentableType='Todo'/>
          </div>
        </div>
        </BodyClassName>

      );
    }
  }
}


export default TodoShow;
