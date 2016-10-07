import React from 'react';
import isEmpty from 'lodash';


class Project extends React.Component {

  componentDidMount() {
    this.props.requestProjects();
  }
  render() {
    let projects;

    if isEmpty(this.props.projects) {
      const projectIds = projects.keys;
      projects = projectIds.map(id => {
        return <li>{this.props.projects[id].name}</li>;
        });
    } else {
      projects = "loading";

    }

    return (
      <div>
        <h2>All Projects:</h2>
        <ul>
          {projects}
        </ul>
      </div>
    );
  }

}

export default Project;
