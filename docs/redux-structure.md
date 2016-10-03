# Redux Structure

## Auth Cycles

### Session API Request Actions
### Session API Response Actions
### Session API


## Error Cycles


## Todo Cycles

### Todos API Request Actions

* fetchAllTodos
  * invoked from TodosIndex ComponentDidMount
  * GET /api/todos is called
  * receiveAllTodos is set as the success callback

* fetchMyTodos
  * invoked from myTodosIndex ComponentDidMount
  * the TodoReducer updates myTodos in the State

* createTodo
  * invoked from new todo button onClick
  * POST /api/todos is called
  * receiveSingleTodo is set as the success callback

* updateTodo
  * invoked from completed checkbox onChange  
  * PATCH /api/todos/:id

* destroyTodo
  * invoked from delete todo button onClick
  * DELETE /api/todos/:id   

### Todos API Response Actions

* receiveAllTodos
  * invoked from an API callback
  * the TodoReducer updates todos in the State

* removeTodo
  * invoked from an API callback
  * the TodoReducer removes todos[id] from the state   

### Todo Lists API Request Actions

  * fetchAllTodoLists
    * invoked from TodoListsIndex ComponentDidMount
    * GET /api/todos is called
    * receiveAllTodos is set as the success callback

  * createTodoList
    * invoked from new todo list button onClick
    * POST /api/todo_lists is called
    * receiveSingleTodoList is set as the success callback

  * updateTodoList
    * invoked from 'archived' checkbox onChange  
    * PATCH /api/todo_lists/:id

  * destroyTodoList
    * invoked from delete button onClick in TodoListIndexItem
    * DELETE /api/todo_lists/:id   

### Todo Lists API Response Actions

  * receiveAllTodoLists
    * invoked from an API callback
    * the TodoListReducer updates todoLists in the State

  * removeTodoList
    * invoked from an API callback
    * the TodoListReducer removes todoLists[id] from the state     

## TeamMember Cycles
  * fetchTeamMembers
    * invoked from TodoForm's input onChange
    * GET api/users
    * receiveTeamMembers is the success callback
  * receiveTeamMembers  
    * invoked from an API callback
    * The TeamMember reducer updates teamMembers in the state
