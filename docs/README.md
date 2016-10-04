# BaseChamp


## Heroku Link

## Minimum Viable Product
TaskChamp is a web application inspired by TaskCamp using Ruby on Rails and React/Redux. By the end of week nine, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

* New account creation, login, and guest/demo login
* A production README
* Hosting on Heroku
* Todo Lists
* Basecamp Home View
* Comments (post comments on todo lists  and allow responses)
* Schedule view of todos
* My assignments view


## Design Docs

* [View Wireframes](./wireframes)
* [API endpoints](./api-endpoints.md)
* [React Components](./component-hierarchy.md)
* [Redux Structure](./redux-structure.md)
* [Sample State](./sample-state.md)
* [DB Schema](./schema.md)

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective**: Functioning rails project with front-end Authentication

* New Rails project
* User model/migration
* Back end authentication (session/password)
* StaticPages controller and root view
* Webpack & react/redux modules
* APIUtil to interact with the API
* Redux cycle for frontend authentication
* User signup/signin components
* Users create or join an existing team on signup
* Blank landing component after signup/signin
* Style signup/signin components
* Seed users
* Review phase 1

### Phase 2: Todos Model, API, and components (2 days)
**Objective**: Todos can be created, read, and destroyed through the API

* Todo model
* Seed database with a small amount of test data
* CRUD API for todos (TodosController)
* JBuilder view for todos
* Todo components and respective Redux loops
  * TodosIndex
  * TodosIndexItem
  * TodosForm
* Todos form autocomplete feature  
* Style todos components
* Style MyTodos component
* Seed todos

### Phase 3: (2 days)
**Objective**: Todos belong to Projects that can be created, read, and destroyed through the app

* Project model
* Seed database with a small amount of test data
* CRUD API for todo lists (ProjectsController)
* JBuilder views for todo lists
* Adding todos requires a project
* Viewing todos by project
* Displaying todos by due date & completion
* Viewing My Todos
* Style project components
* Style project preview on homepage
* Seed projects

### Phase 4: (1 days)
**Objective**: Todos appear as events in schedule by due_date.

* todos are added to the schedule as they are created
* JBuilder view for schedule
* Schedule components and respective Redux loops
  * SchedulesIndex
* Style schedule index page
* Style schedule preview on homepage
* Seed schedule

### Phase 5: (1 day)
**Objective**: Comments can be made on a project.

* Comments model
* Seed database with a small amount of test data
* CRUD API for comments (CommentsController)
* JBuilder view for schedule
* Comments components and respective Redux loops
  * CommentsIndex, CommentsForm, CommentsIndexItem
* Style comments view and new comment form

### Phase 6: (1 day)
* add events feature with Event model and components
