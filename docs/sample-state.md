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

  // only fetch comments for the Detail Project View
  // only fetch basic info on the todos

  projects: {

    1: {
      title: "Development",
      description: null,
      author_id: 1,
      completionCount: { totalTodos: 6, completedTodos: 2}

      pending_todos: [],
      completed_todos: [],
      comments: []

    }

  },

  todo {

    1: {
      title: "make wireframes",
      description: null,
      author: username,
      todoer: username,
      completion: false,
      duedate: "10/03/2016",

      project_id: 1
    }

  },


  teamMembers {

    1: {
      id: 1,
      username: "user1",
      email: "user1@user"
      team_id: 1
    },

  },


  comments {

    1: {
      body: "this is a comment",
      author: "user1",
      project_id: 1,
      parent_comment_id: 3,
      timestamp: "10/1/2016 3:45PM"
    }

  }

}
