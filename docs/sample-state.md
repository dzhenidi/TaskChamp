{
  currentUser: {
    id: 1,
    username: "user1"
  },
  forms: {
    signup: { errors },
    login: { errors }.
    createNore: { errors: ["body can't be blank"]}
  },
  projects: {
    1: {
      title: "Todo App",
      description: "for workflow management",
      author_id: 1,
      members: { "user1": "email1", "user2": "email2" }
    }
  },
  todo_lists: {
    1: {
      title: "Development",
      description: null,
      author_id: 1,
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
  team {
    1: {
      members: { "user1": "email1", "user2": "email2" },
      manager: { "user1": "email1"}
    }
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
      author: { "user1": "email1"}
    }
  }

}
