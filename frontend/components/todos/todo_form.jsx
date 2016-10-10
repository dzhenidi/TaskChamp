import React from 'react';
import { DateField, Calendar, MonthView } from 'react-date-picker';

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
    };
    this.selectName = this.selectName.bind(this);
    this.handleAutocomplete = this.handleAutocomplete.bind(this);
    this.matches = this.matches.bind(this);
    this.teammatesNames = Object.keys(this.props.teammates);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
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
    return (e) => {
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
    };
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
              <form className="expandable-form" onSubmit={this.handleSubmit()}>
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
                    value=""/>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="date"
                    value="due"/>
                  <a href="">Due on</a>
                  <input type="text" placeholder="date field"/>
                </label>

                <button className="small home-button">Add this to-do</button>
              </form>

          </div>
        </li>
      );
    }
  }
}

export default TodoForm;
