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



<!-- ### MessageBoard
* GET /api/message_board -->

### Messages
* GET /api/messages
* POST /api/messages
* EDIT /api/messages/:id
* DELETE /api/messages/:id


### TodoLists
* GET /api/todo_lists
* POST /api/todo_lists
* DELETE /api/:id
* PATCH /api/:id

### Todos
* GET /api/todos
* POST /api/todos
* PATCH /api/todos/:id
* DELETE /api/todos/:id

### Schedule
* GET /api/schedule

### Events
* GET /api/events
* POST /api/events
* DELETE /api/events/:id
* EDIT /api/events/:id

### Team
* GET /api/team
