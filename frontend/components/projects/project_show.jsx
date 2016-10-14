import ProjectItem from './project_item';
import React from 'react';
import BodyClassName from 'react-body-classname';
import { Link } from 'react-router';

class ProjectShow extends React.Component {
  constructor(props){
    super(props);
  }

  toggleHidden(){
  }

  render(){
    let project = this.props.project;
    let toggleTodo = this.props.toggleTodo;

    return(
      <BodyClassName className='body-home'>
        <div className="project-show">
          <div className="project-show-container">
            <ul className="buttons-list group">
              <li>
                <button
                  className="small home-button"
                  onClick={this.toggleHidden}>Edit
                </button>
              </li>
            </ul>

            <div className="nav-history">
              From: <Link to='/projects'>Projects</Link>
            </div>

            <div className="project-item-container">
              <ProjectItem
                key={project.id}
                project={project}
                toggleTodo={toggleTodo}/>

            </div>

          </div>
        </div>
      </BodyClassName>
    );

  }
}


export default ProjectShow;
