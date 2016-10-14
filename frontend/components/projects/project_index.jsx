import React from 'react';
import ProjectItem from './project_item';
import ProjectForm from './project_form';
import BodyClassName from 'react-body-classname';

class ProjectsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
    this.toggleHidden = this.toggleHidden.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  // componentWillUpdate(nextProps){
  //   const currentUser = nextProps.currentUser;
  //   if (!currentUser) {
  //     hashHistory.push('/signup');
  //   }
  // }

  componentDidMount() {
    this.props.requestProjects();
  }

  toggleHidden(e){
    this.setState({hidden: !this.state.hidden});
  }

  hideForm(){
    this.setState({hidden: true});
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
      <BodyClassName className='body-home'>
        <section className="projects-index-container">
          <header className="section-header">
            <h1>To-dos:</h1>
            <button
              className="big home-button"
              onClick={this.toggleHidden}>Make another list
            </button>
          </header>

          <div className="expandable-project-form">

            <ProjectForm
              createProject={createProject}
              hidden={this.state.hidden}
              hideForm={this.hideForm}/>
          </div>
          <ul className="projects-list">
            {projectItems}
          </ul>
        </section>
      </BodyClassName>
    );
  }

}

export default ProjectsIndex;
