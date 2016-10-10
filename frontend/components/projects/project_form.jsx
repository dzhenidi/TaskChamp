import React from 'react';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(){
    return (e) => {
      e.preventDefault();
      const project = Object.assign({}, this.state);
      this.props.createProject({project});
      this.setState({title:"", description:""});
    };
  }
  render(){
    if (this.props.hidden) {
      return (<div></div>);
    } else {

      return(
        <form className="expandable-form" onSubmit={this.handleSubmit()}>
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
          <button className="small home-button">Add this list</button>
        </form>
      );
    }
  }

}

export default ProjectForm;
