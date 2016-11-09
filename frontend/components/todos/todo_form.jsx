import React from 'react';
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
      dueDate: todo.due_date ? moment(todo.due_date, "YYYY-MM-DD") : null,
      todoer: todo.todoer || null,
      autocompleteVal: '',
      done: this.props.done || false,
      date: todo.due_date ? true : false,
      displayAutocomplete: false,
      displayQuill: Boolean(todo.description),
      imageFile: null,
      imageUrl: todo.imageUrl || null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectName = this.selectName.bind(this);
    this.handleAutocomplete = this.handleAutocomplete.bind(this);
    this.matches = this.matches.bind(this);
    this.teammatesNames = Object.keys(this.props.teammates);
    this.setDate = this.setDate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
    this.toggleDate = this.toggleDate.bind(this);
    this.todoDetails = this.todoDetails.bind(this);
    this.quill = this.quill.bind(this);
    this.openQuill = this.openQuill.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }
  toggleDate() {
    return this.setState({'date': !this.state.date})
  }
  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({ imageFile: file, imageUrl: fileReader.result })
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

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

  checkTodo() {
    return e => {
      this.setState({done: !this.state.done});
    };
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
    let formData = new FormData();
    formData.append("todo[title]", this.state.title);
    formData.append("todo[description]", this.state.text);
    formData.append("todo[due_date]", this.state.date ? moment(this.state.dueDate).format("YYYY-MM-DD") : null);
    formData.append("todo[todoer_id]", this.state.todoerId);
    formData.append("todo[done]", this.state.done);
    formData.append("todo[file]", this.state.imageFile);

    switch (this.props.action) {
      case "create":
        formData.append("todo[project_id]", this.props.projectId);
        this.props.createTodo(formData);
        break;
      case "update":
        this.props.updateTodo(this.props.todo.id, formData);
        break;
    }

    // const todo = {
    //   'title': this.state.title,
    //   'description': this.state.text,
    //   'due_date': this.state.date ? moment(this.state.dueDate).format("YYYY-MM-DD") : null,
    //   'todoer_id': this.state.todoerId,
    //   'done': this.state.done,
    //   'project_id': this.props.projectId,
    //   };
    //
    // if (this.props.action === "create")  {
    //   this.props.createTodo(todo);
    // } else {
    //   todo.id = this.props.todo.id;
    //   this.props.updateTodo(todo);
    // }
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
    if (this.state.displayQuill) {

      return(
        <ReactQuill
          theme="snow"
          className="custom-quill container"
          value={this.state.text}
          onChange={this.quillChange()}>
          <ReactQuill.Toolbar
            key="toolbar"
            ref="toolbar"
            className="custom-quill toolbar"
            items={ReactQuill.Toolbar.defaultItems.slice(0, 3)} />
          <div key="editor"
            ref="editor"
            className="quill-contents"
            dangerouslySetInnerHTML={{__html:this.state.text}}/>
        </ReactQuill>
      );
    } else {
      return (<div></div>);
    }
  }

  openQuill(){
    this.setState({
      displayQuill: true
    })
  }

  datePicker(){
    if (this.state.date) {
      return(
        <DatePicker
          selected={this.state.dueDate}
          onChange={this.setDate}
          placeholderText="Add a due date..." />
      );
    } else {
      return (<div></div>);
    }
  }

  setDate(d) {
    this.setState({['dueDate']: d});
  }

  todoDetails() {
    if (!this.state.description) {
      return (
        <input
          className="input"
          placeholder="Add extra details..."
          onClick={this.openQuill}
          />
      );
    }
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
          <div className="indent">
            <div className="checkbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={this.state.done}
                  className="checkbox-input"
                  onChange={this.checkTodo()}/>
                <span className="checkbox-button"></span>
              </label>
                <span className="checkbox-content">

                <form
                  className="expandable-form todo"
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
                  <div className="details-anchor">
                    {this.todoDetails()}
                  </div>
                  {this.state.displayQuill ? this.quill() : null}
                  <input type="file" onChange={this.updateFile}/>
                  <img src={this.state.imageUrl}/>
                  <label className="radio-label">
                    <input
                      type="radio"
                      className="radio-input"
                      name="date"
                      checked={!this.state.date}
                      onChange={this.toggleDate}/>
                    No due date
                  </label>
                  <label className="radio-label">
                    <input
                      type="radio"
                      className="radio-input"
                      name="date"
                      onChange={this.toggleDate}
                      checked={this.state.date}/>
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

              </span>
            </div>
          </div>
        </li>
      );
    }
  }
}

export default TodoForm;
