import React from 'react';
import ProjectItem from './project_item';
import ProjectForm from './project_form';

class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  componentDidMount() {
    this.props.requestProjects();
  }

  toggleHidden(e){
    this.setState({hidden: !this.state.hidden});
  }
  render() {

    let projects = this.props.projects;
    const toggleTodo = this.props.toggleTodo;
    const createProject = this.props.createProject;

    let projectItems;

    if (projects) {
      const projectIds = Object.keys(projects);
      projectItems = projectIds.map(id => {
        return (
          <ProjectItem
            key={id}
            project={projects[id]}
            toggleTodo={toggleTodo}/>
        );
      });
    } else {
      projectItems = "";
    }
    return (
      <div className="projects-index-body">
        <section className="projects-index-container">
          <h1>To-dos:</h1>
          <button className="button" onClick={this.toggleHidden}>Make another list</button>
          <ProjectForm createProject={createProject} hidden={this.state.hidden}/>
          <ul className="projects-list">
            {projectItems}
          </ul>
        </section>
      </div>
    );
  }

}

export default ProjectsIndex;
