#API endpoints

## HTML API

### Root

* GET / -loads React web app

## JSON API

### Users

* GET /api/users
* POST /api/users
* PATCH /api/users

### Session

* POST /api/session
* DELETE /api/session
* GET /api/session


### Homepage

* GET /api/home
  * displays links to todo lists, my todos, message board, calendar
  * may skip and redirect directly to projects page on login


### MessageBoard
* GET /api/message_board

### Messages
* GET /api/message_board/messages
* POST /api/message_board/messages
* EDIT /api/message_board/:messageId
* DELETE /api/message_board/:messageId


### TodoLists
* GET /api/todo_lists
* POST /api/todo_lists
* DELETE /api/:todo_list_id
* PATCH /api/:todo_list_id

### Todos
* GET /api/todos
* POST /api/todos
* PATCH /api/todos/:todo_id
* DELETE /api/todos/:todo_id

### Schedule
* GET /api/schedule

### Events
* GET /api/events
* POST /api/events
* DELETE /api/events/:event_id
* EDIT /api/events/:event_id

### Team
* GET /api/team
