# Component Hierarchy

**AuthFormContainer**
* AuthForm

**HomeContainer**
*

**ProjectsIndexContainer**
* ProjectIndexItem
* ProjectForm

**TodoListsIndexContainer**
* TodoListIndexItem
* TodoListForm

**TodoIndexContainer**
* TodoIndexItem
* TodoForm

**ScheduleContainer**
* EventsIndexContainer
* EventsIndexItem

**MessagesIndexContainer**
* MessageFormContainer


## Routes


Path | Component
-----|-----------
"/signup" | "AuthFormContainer"
"/signin" | "AuthFormContainer"
"/home" | "HomeContainer"
"home/projects" | "ProjectsIndexContainer"
  | "ProjectForm"
  | "ProjectIndexItem"
"home/projects/todo-lists" | "TodoListsIndexContainer"
  |"TodoListIndexItem"
  |"TodoListForm"
"home/projects/todo-lists/lists" | "TodosIndexContainer"
  |"TodosIndexItem"
  |"TodosForm"
"home/schedule" | "ScheduleContainer"
"home/schedule/events" | "EventsIndexContainer"
"home/message-board" | "MessagesIndexContainer"
"home/message-board/messages" | "MessageFormContainer"
