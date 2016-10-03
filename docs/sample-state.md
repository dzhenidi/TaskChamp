{
  currentUser: {
    id: 1,
    username: "user1",
    email: "user1@user"
    team_id: 1
  },
  forms: {
    signup: { errors },
    login: { errors }
  },
  todoLists: {
    1: {
      title: "Development",
      description: null,
      author_id: 1,
      team_id: 2,
      archived: false,
      completionCount: { totalTodos: 6, completedTodos: 2}
    }
  },
  todos {
    1: {
      title: "make wireframes",
      description: null,
      author_id: 2,
      todoer_id: 1,
      completion: false,
      duedate: "10/03/2016",
      todo_list_id: 1
    }
  },
  myTodos {
    1: {
      title: "make wireframes",
      description: null,
      author_id: 2,
      todoer_id: 1,
      completion: false,
      duedate: "10/03/2016",
      todo_list_id: 1
    }
  }
  teamMembers {
    1: {
      id: 1,
      username: "user1",
      email: "user1@user"
      team_id: 1
    },
  },
  events {
    1: {
      title: "dev meeting",
      description: "to discuss dev",
      date: "10/03/2016",
    }
  },
  messages {
    1: {
      title: "the app will be great",
      body: null,
      author: { "user1": "email1"},
      timestamp: "10/1/2016 3:45PM"
    }
  }

}
