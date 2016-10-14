import React from 'react';
import 'react-date-picker/index.css';
import ReactQuill from 'react-quill';
import DatePicker from 'react-datepicker';
// import 'quill/dist/quill.snow.css';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);


    const todo = this.props.todo || {};

    this.state = {
      title: todo.title || '',
      description: todo.description || '',
      text: todo.description || '',
      todoerId: todo.todoer_id || '',
      dueDate: todo.due_date || null,
      todoer: todo.todoer || null,
      autocompleteVal: '',
      done: this.props.done || false,
      date: false,
      displayAutocomplete: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectName = this.selectName.bind(this);
    this.handleAutocomplete = this.handleAutocomplete.bind(this);
    this.matches = this.matches.bind(this);
    this.teammatesNames = Object.keys(this.props.teammates);
    this.setDate = this.setDate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
    // debugger
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  // componentWillUpdate(nextProps){
  //   const currentUser = nextProps.currentUser;
  //   if (!currentUser) {
  //     hashHistory.push('/signup');
  //   }
  // }


  matches(){
    const matches = [];
    if (this.state.autocompleteVal.length === 0) {
      return this.teammatesNames;
    }

    this.teammatesNames.forEach(name => {
      let sub = name.slice(0, this.state.autocompleteVal.length);
      if (sub.toLowerCase() === this.state.autocompleteVal.toLowerCase()){
        matches.push(name);
      }
    });

    return matches;
  }

  selectName(e) {
    let name = e.currentTarget.innerText;
    let id = this.props.teammates[name];
    this.setState({
      autocompleteVal: name,
      todoerId: id,
      displayAutocomplete: false
    });
  }

  handleAutocomplete(e) {
    this.setState({
      autocompleteVal: e.currentTarget.value,
      // displayAutocomplete: true
    });
  }

  handleDisplay() {
    this.setState({
      displayAutocomplete: true
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = {
      'title': this.state.title,
      'description': this.state.text,
      'due_date': this.state.dueDate.format("YYYY-MM-DD"),
      'todoer_id': this.state.todoerId,
      'done': this.state.done,
      'project_id': this.props.projectId,
      };

    if (this.props.action === "create")  {
      this.props.createTodo(todo);
    } else {
      todo.id = this.props.todo.id;
      this.props.updateTodo(todo);
    }
    this.setState({title:"", description:"", todoerId:"", dueDate:""});
    this.props.hideForm();
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.hideForm();
  }

  quillChange(){
    return (value) => {
      this.setState({text: value});
    };
  }



  quill(){
    return(
      <ReactQuill
        theme="snow"
        value={this.state.text}
        onChange={this.quillChange()}>
        <ReactQuill.Toolbar key="toolbar"
                    ref="toolbar"
                    items={ReactQuill.Toolbar.defaultItems.slice(0, 3)} />
        <div key="editor"
             ref="editor"
             className="quill-contents"
             dangerouslySetInnerHTML={{__html:this.state.text}}/>
      </ReactQuill>
    );
  }

  datePicker(){
    let selected = this.state.dueDate ? moment(this.state.dueDate) : null;
    return(
      <DatePicker
        selected={selected}
        onChange={this.setDate}
        placeholderTest="due on" />
    );
  }

  setDate(d) {
    this.setState({['dueDate']: d});
  }


  render(){

    let autocompleteResults;
    if (this.state.displayAutocomplete) {
      autocompleteResults = this.matches().map((result, i) => {
        return (
          <li key={i} onClick={this.selectName}>{result}</li>
        );
      });
    } else {
      autocompleteResults = '';
    }

    const assignPlaceholder = this.state.todoer ? this.state.todoer : "Assign to...";
    const submitLabel = (this.props.action === "create") ? "Add this to-do" : "Save changes";
    const cancelLabel = (this.props.action === "create") ? "Cancel" : "Discard changes";

    if (this.props.hidden) {
      return (<div></div>);
    } else {
      return(
        <li className="todo-form">
          <div className="expandable-todo-form checkbox">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={this.state.done}
                className="checkbox-input"/>
            </label>
              <form
                className="expandable-form"
                onSubmit={this.handleSubmit}>
                <input
                  className="input"
                  value={this.state.title}
                  placeholder="Add a new to-do..."
                  onChange={this.update('title')}
                  required/>
                <input
                  onClick={this.handleDisplay}
                  onChange={this.handleAutocomplete}
                  value={this.state.autocompleteVal}
                  placeholder={assignPlaceholder}/>
                <ul>
                  <div className="autocomplete">
                    {autocompleteResults}
                  </div>
                </ul>
                <input
                  className="input"
                  value={this.state.description}
                  placeholder="Add extra details"
                  onChange={this.update('description')}/>
                {this.quill()}
                <label className="radio-label">
                  <input
                    type="radio"
                    className="radio-input"
                    name="date"
                    defaultChecked
                    onChange={this.update('date')}
                    value='false'/>
                  No due date
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    className="radio-input"
                    name="date"
                    onChange={this.update('date')}
                    value='true'/>
                  Due on
                </label>
                {this.datePicker()}
                <div className="buttons-container group">
                  <button
                    className="small home-button"
                    >{submitLabel}
                  </button>
                  <button
                    className="small cancel home-button"
                    onClick={this.handleCancel}>{cancelLabel}
                  </button>

                </div>

              </form>

          </div>
        </li>
      );
    }
  }
}

export default TodoForm;
