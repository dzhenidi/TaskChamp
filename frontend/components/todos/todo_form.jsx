import React from 'react';
import { DateField, Calendar, MonthView } from 'react-date-picker';
import 'react-date-picker/index.css';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      todoerId: '',
      dueDate: '',
      autocompleteVal: '',
      done: this.props.done,
      date: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectName = this.selectName.bind(this);
    this.handleAutocomplete = this.handleAutocomplete.bind(this);
    this.matches = this.matches.bind(this);
    this.teammatesNames = Object.keys(this.props.teammates);
    this.setDate = this.setDate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
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
    this.setState({ autocompleteVal: name, todoerId: id });
  }

  handleAutocomplete(e) {
    this.setState({autocompleteVal: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = {
      'title': this.state.title,
      'description': this.state.description,
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

  render(){
    let autocompleteResults = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectName}>{result}</li>
      );
    });

    if (this.props.hidden) {
      return (<div></div>);
    } else {
      return(
        <li className="todo-form">
          <div className="expandable-todo-form checkbox">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input"/>
            </label>
              <form className="expandable-form" onSubmit={this.handleSubmit}>
                <input
                  className="input"
                  value={this.state.title}
                  placeholder="Add a new to-do..."
                  onChange={this.update('title')}
                  required/>
                <input
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
                <label className="radio-label">No due date
                  <input
                    type="radio"
                    name="date"
                    defaultChecked
                    onChange={this.update('date')}
                    value='false'/>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="date"
                    onChange={this.update('date')}
                    value='true'/>
                  <input type="text" placeholder="Add a due date..."/>
                </label>
                <DateField dateFormat="YYYY-MM-DD" onChange={this.setDate()}/>
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
