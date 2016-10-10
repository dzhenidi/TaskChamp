import React from 'react';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const project = Object.assign({}, this.state);
    this.props.createProject({project});
    this.setState({title:"", description:""});
    this.props.hideForm();
  }

  handleCancel(e){
    e.preventDefault();
    this.props.hideForm();
  }
  render(){
    if (this.props.hidden) {
      return (<div></div>);
    } else {

      return(
        <form className="expandable-form">
          <label>
            <input
              className="input title"
              value={this.state.title}
              placeholder="Give this list a name:"
              onChange={this.update('title')}
              required/>
          </label>
          <label>
            <input
              className="input detail"
              value={this.state.description}
              placeholder="Add extra details"
              onChange={this.update('description')}/>
          </label>
          <div className="buttons-container">
            <button
              className="small home-button"
              onClick={this.handleSubmit}>Add this list
            </button>
            <button
              className="cancel small home-button"
              onClick={this.handleCancel}>Cancel
            </button>
          </div>
        </form>
      );
    }
  }

}

export default ProjectForm;
