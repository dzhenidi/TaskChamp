TaskChamp is a workflow app, inspired by Basecamp. The app provides a
space for teams to track, discuss, and schedule their current and upcoming
projects in a neatly organized way.

TaskChamp is a single-page web app built on Ruby on Rails in the back-end and React with Redux in the front-end. UI features include Google OAuth, calendar integration, rich-text editing, image and file upload. Uploads are stored via AWS.

##Projects##
Users can see all current projects and create new ones on the project
index page.
Projects can be seen in detail and discussed on the project view page.

![Project Index Page](./docs/screenshots/project_page.png?raw=true "project page")

##Todos##
The Project Index Page also gives the user an overview of all todos, sorted
by project, due date, and completion, and tagged with the name of the
"assignee" and the due date. Users can create and check todos "DONE" right on the homepage, or, they can click on a todo for a more detailed view and an opportunity to edit, upload files, and add comments.

![Todo View Page](./docs/screenshots/todo_view_page.png?raw=true "todo page")

##Schedule##
The user can create events and see upcoming events and assignments on the Schedule page. Events can be shared with selected team members and posted to the user's Google Calendar.

![Schedule View Page](./docs/screenshots/schedule_page.png?raw=true "schedule page")

##User Profile##
Users can log in with Google, and use their Google profile pic, or upload another image on the user profile page.

##Future Additions##
  * email notifications
