# Redux Structure

## Auth Cycles

### Session API Request Actions
### Session API Response Actions
### Session API


## Error Cycles


## Todo Cycles

### Todos API Request Actions

* fetchAllTodos
  * invoked from TodosIndex
  * GET /api/todos is called
  * receiveAllTodos is set as the success callback

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

### Todos API Request Actions

* receiveAllTodos
  * invoked from an API callback
  * the TodoReducer updates todos in the State

* removeTodo
  * invoked from an API callback
  * the TodoReducer removes todos[id] from the state    

  
