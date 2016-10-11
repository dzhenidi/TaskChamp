import React from 'react';
import { DateField, Calendar, MonthView } from 'react-date-picker';
import 'react-date-picker/index.css';
import ReactQuill from 'react-quill';
import 'react-quill/node_modules/quill/dist/quill.snow.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      text: '',
      todoerId: '',
      dueDate: '',
      autocompleteVal: '',
      done: this.props.done,
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
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  setDate() {
     return (dateString) => {
      this.setState({['dueDate']: dateString});
    };
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
      'due_date': this.state.dueDate,
      'todoer_id': this.state.todoerId,
      'done': this.state.done,
      'project_id': this.props.projectId,
      };
    this.props.createTodo({todo});
    this.setState({title:"", description:"", todoerId:"", dueDate:""});
    this.props.hideForm();
  }

  handleCancel(e) {
    e.preventDefault();
    // this.setState({title:"", description:"", todoerId:"", dueDate:""});
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
                    items={ReactQuill.Toolbar.defaultItems} />
        <div key="editor"
             ref="editor"
             className="quill-contents"/>
      </ReactQuill>
    );
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

    if (this.props.hidden) {
      return (<div></div>);
    } else {
      return(
        <li className="todo-form">
          <div className="expandable-todo-form checkbox">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input"/>
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
                  placeholder='Assign to...'/>
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
                <DateField
                  className="my-date-picker"
                  dateFormat="YYYY-MM-DD"
                  onChange={this.setDate()}/>
                <div className="buttons-container group">
                  <button
                    className="small home-button"
                    >Add this to-do
                  </button>
                  <button
                    className="small cancel home-button"
                    onClick={this.handleCancel}>Cancel
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
