# Component Hierarchy

**AuthFormContainer**
* AuthForm

**HomeContainer**
* **NavigationContainer**

* MyTodosPreviewContainer
  * TodoIndexItem
* AllTodosPreviewContainer  
  * TodoListIndexItem
* MessagesPreviewContainer
  * MessagesIndexItem
* EventsPreviewContainer  
  * EventsIndexItem



**TodoListsIndexContainer**
* TodoListDetail
* TodoListIndexItem
* TodoListForm

* **TodoIndexContainer**
  * TodoIndexItem
  * TodoForm
  * TodoCompletionCounter

**ScheduleContainer**
* EventsIndexContainer
* EventsIndexItem

**MessagesIndexContainer**
* MessageFormContainer


## Routes


Path              | Component
-----             |-----------
"/signup"         | "AuthFormContainer"
"/signin"         | "AuthFormContainer"
"/home"           | "HomeContainer"
"home/todo-lists" | "TodoListsIndexContainer"
                  | "TodoListIndexItem"
                  | "TodoListForm"
                  | "TodoListDetail"
                  | "TodoIndexItem"
                  | "TodoForm"

"home/todo-lists/:listId" | "TodoListsIndexItemContainer"
                          | "TodosForm"
"home/schedule" | "ScheduleContainer"
"home/schedule/events" | "EventsIndexContainer"
"home/message-board" | "MessagesIndexContainer"
"home/message-board/messages" | "MessageFormContainer"
