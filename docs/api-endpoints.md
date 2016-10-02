#API endpoints

## HTML API

### Root

* GET / -loads React web app

## JSON API

### Users

* POST /api/users
* PATCH /api/users

### Session

* POST /api/session
* DELETE /api/session
* GET /api/session


### Homepage

* GET /api/home
  * displays links to projects, message board, calendar
  * may skip and redirect directly to projects page on login


### MessageBoard
* GET /api/message_board

### Messages
* GET /api/message_board/messages
* POST /api/message_board/messages
* EDIT /api/message_board/:messageId
* DELETE /api/message_board/:messageId

### Projects
* GET /api/projects
* POST /api/projects
* DELETE /api/project/:projectId

### TodoLists
* GET /api/projects/todo_lists
* POST /api/projects/todo_lists
* DELETE /api/projects/:todo_listId

### Todos
* GET /api/projects/todo_lists/todos
* POST /api/projects/todo_lists/todos
* PATCH /api/projects/todo_lists/:todoId 
* DELETE /api/projects/todo_lists/:todoId

### Schedule
* GET /api/schedule

### Events
* GET /api/schedule/events
* POST /api/schedule/events
* DELETE /api/schedule/:eventId
* EDIT /api/schedule/:eventId

### Team
* GET /api/team
