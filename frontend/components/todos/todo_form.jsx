import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      todoerId: "",
      dueDate: "",
      autocompleteVal: ""
    };
    this.selectName = this.selectName.bind(this);
    this.handleAutocomplete = this.handleAutocomplete.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  matches(){
    const matches = [];
    if (this.state.autocompleteVal.length === 0) {
      return this.props.teammates;
    }

    this.props.teamMates.forEach(name => {
      let sub = name.slice(0, this.state.autocompleteVal.length);
      if (sub.toLowerCase() === this.state.autocompleteVal.toLowerCase()){
        matches.push(name);
      }
    });

    return matches;
  }

  selectName(e) {
    let name = e.currentTarget.innerText;
    this.setState({ autocompleteVal: name });
  }

  handleAutocomplete(e) {
    this.setState({autocompleteVal: event.currentTarget.value});
  }

  handleSubmit(e) {
    return (e) => {
      e.preventDefault();
      const todo = Object.assign({}, this.state);
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

    return(
      <form className="todo-form" onSubmit={this.handleSubmit()}>
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
            {autocompleteResults}
          </ul>
          <input
            className="input"
            value={this.state.description}
            placeholder="Add extra details"
            onChange={this.update('description')}/>

          <button className="create-button">Add this to-do</button>
      </form>
    );
  }
}

export default TodoForm;
