import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autocompleteVal: '',
      teammates: this.props.teammates,
      displayAutocomplete: false,
      receiveTodoerId: this.props.receiveTodoerId
    };
    this.teammatesNames = Object.keys(this.props.teammates);
    this.handleDisplay = this.handleDisplay.bind(this);
    this.handleAutocomplete = this.handleAutocomplete.bind(this);
    this.selectName = this.selectName.bind(this);


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
    let id = this.state.teammates[name];
    this.setState({
      autocompleteVal: name,
      displayAutocomplete: false
    });
    this.state.receiveTodoerId(id);
  }

  handleDisplay() {
    this.setState({
      displayAutocomplete: true
    });
  }

  handleAutocomplete(e) {
    this.setState({
      autocompleteVal: e.currentTarget.value,
      // displayAutocomplete: true
    });
  }

  render() {
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

    const assignPlaceholder =
      this.state.todoer ? this.state.todoer : "Assign to...";

    return (
      <div>
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
      </div>
    )
  }


}

export default Autocomplete;
