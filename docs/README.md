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
* [React Components](./component-heirarchy.md)
* [Redux Structure](./redux-structure.md)
* [Sample State](./sample-state.md)
* [DB Schema](./schema.md)

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective**: Functionning rails project with front-end Authentication

* New Rails project
* User model/migration
* Back end authentication (session/password)
* StaticPages controller and root view
* Webpack & react/redux modules
* APIUtil to interact with the API
* Redux cycle for frontend authentication
* User signup/signin components
* Blank landing component after signup/signin
* Style signup/signin components
* Seed users
* Review phase 1

### Phase 2: Todos Model, API, and components (2 days)
* Todo model
* Seed database with a small amount of test data
* CRUD API for todos (TodosController)
* JBuilder view for todos
* Todo components and respective Redux loops
  * TodosIndex
  * TodosIndexItem
  * TodosForm
* Autosave todos feature  
* Style todos components
* Seed todos

### Phase 3:
