# BaseChamp


## Heroku Link

## Minimum Viable Product
BaseChamp is a web application inspired by BaseCamp using Ruby on Rails and React/Redux. By the end of week nine, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

* New account creation, login, and guest/demo login
* A production README
* Hosting on Heroku
* To-do Lists
* Basecamp Home View
* Message Board (post questions and allow comments/answers)
* Schedule


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
**Objective**: Todos belong to Todo Lists that can be created, read, and destroyed through the app

* TodoList model
* Seed database with a small amount of test data
* CRUD API for todo lists (TodoListsController)
* JBuilder views for todo lists
* Adding todos requires a todo list
* Viewing todos by todo list
* Displaying todos by due date & completion
* Viewing My Todos
* Style todo list components
* Style todo list preview on homepage
* Seed todo lists

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
**Objective**: Messages can be posted to a message board.

* Messages model
* Seed database with a small amount of test data
* CRUD API for schedule (MessagesController)
* JBuilder view for schedule
* Messages components and respective Redux loops
  * MessagesIndex, MessagesForm, MessagesIndexItem
* Adding events requires a schedule   
* Style schedule index page
* Style schedule preview on homepage
* Seed schedule

### Phase 6: (1 day)
* add events feature with Event model and components
