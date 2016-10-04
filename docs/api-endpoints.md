#API endpoints

## HTML API

### Root

* GET / -loads React web app

## JSON API

### Users

* GET /api/users
* POST /api/users
* PATCH /api/users
* GET /api/users/homepage
  * displays links to todo lists, my todos, message board, calendar
  * may skip and redirect directly to projects page on login

### Session

* POST /api/session
* DELETE /api/session
* GET /api/session



### Projects
* GET /api/projects
* POST /api/projects
* DELETE /api/project/:id
* PATCH /api/project/:id

### Comments
* POST /api/project/:id/comments

### Todos
* GET /api/todos
* POST /api/todos
* PATCH /api/todos/:id
* DELETE /api/todos/:id

### Schedule
* GET /api/schedule


### Team
* GET /api/team
