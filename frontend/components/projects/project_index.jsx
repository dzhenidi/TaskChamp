import React from 'react';
import ProjectItem from './project_item';


class ProjectsIndex extends React.Component {

  componentDidMount() {
    this.props.requestProjects();
  }

  render() {

    let projects = this.props.projects;
    let projectItems;

    if (projects) {
      const projectIds = Object.keys(projects);
      projectItems = projectIds.map(id => {
        return (
          <ProjectItem
            key={id}
            title={projects[id].title}
            description={projects[id].description}
            todos={projects[id].todos} />
        );
      });
    } else {
      projectItems = "";
    }

    return (
      <body className="projects-index-body">
        <section className="projects-index-container">
          <h1>To-dos:</h1>
          <a href="" className="button">Make another list</a>
          <ul className="projects-list">
            {projectItems}
          </ul>
        </section>
      </body>
    );
  }

}

export default ProjectsIndex;
