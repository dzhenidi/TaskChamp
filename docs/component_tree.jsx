
// props: projects, createProject, toggleProject, archiveProject
<div>
  <ul className="project">
    //{projects.map()}
    // <ProjectItem key project={project} archiveProject={archiveProject} toggleProject={toggleProject}/>
    <li className="project-item">
      <div className="project-header">
        <button className={} onClick={this.props.archiveProject}>Archive</a>
        <a onClick={this.props.toggleDetail}>{title}</a>
      </div>
      // {if detail}
      // <ProjectDetailViewContainer project={project} />
      // Props: requestTodos, destroyProject
      <div>
        //<TodosContainer project_id={project.id} />
        //Props: todos, project_id, createTodo
        <ul className="todos-list">
          //{todos.map}
          //destroyTodo, toggleTodo
          <li className="todo-header">
            {todo.title}
            <div className="todo-buttons">
              <button onClick={toggleTodo}></button>
              <button onClick={deleteTodo}></button>
            </div>
          </li>

          // < TodoForm project_id={project_id} createTodo={createTodo}
        </ul>
        <button className="delete-button" onClick={destroyProject}></button>
      </div>
    </li>
  </ul>
    //<ProjectForm createProject={createProject}/>
</div>
