# Component Hierarchy

**AuthFormContainer**
* AuthForm

**HomeContainer**
* **NavigationContainer**

* TodoListsIndexContainer
* MessagesIndexContainer

**TodoListContainer**
* TodoListDetail
* TodoListItem
* TodoListForm

* **TodoContainer**
// if I pass props from the TodoListsContainer to the TodoIndex and TodoIndexItem, I do not need a container for todo index
  * TodoItem
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
"/todo-lists" | "TodoListsIndexContainer"
                  | "TodoListIndexItem"
                  | "TodoListForm"
                  | "TodoListDetail"
                  | "TodoIndexItem"
                  | "TodoForm"

"/todo-lists/:listId" | "TodoListsIndexItemContainer"
                          | "TodosForm"
"/schedule" | "ScheduleContainer"
"/schedule/events" | "EventsIndexContainer"
"/messages" | "MessagesIndexContainer"
"/messages/new" | "MessageFormContainer"
