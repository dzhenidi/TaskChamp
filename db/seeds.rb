# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
teams = Team.create([
  { name: "Rolling Press, Inc"},
  { name: "Gowanus Nursery"},
  { name: "Coworkrs on Forth"},
  { name: "Big Reuse Brooklyn"},
  ])

users = User.create([
  { username: "Kristen M.", password: "starwars", email: "kristen@rollingpress.com", team_id: 1},
  { username: "Eugene M", password: "starwars", email: "eugene@rollingpress.com", team_id: 1},
  { username: "Jon B.", password: "starwars", email: "jonb@rollingpress.com", team_id: 1},
  { username: "J. Roberts", password: "starwars", email: "jroberts@rollingpress.com", team_id: 1},
  ])


todos = Todo.create([
  { title: "book space",
    description: "seating over 40 people",
    due_date: "10-08-16",
    author_id: 1,
    todoer_id: 2,
    project_id: 1
  },
  { title: "order food",
    description: "to arrive before 9am",
    due_date: "10-09-16",
    author_id: 1,
    todoer_id: 2,
    project_id: 1
  },
  { title: "format powerpoint presentation",
    due_date: "10-10-16",
    author_id: 1,
    todoer_id: 4,
    project_id: 1
  },
  { title: "update contact info",
    due_date: "11-10-16",
    author_id: 1,
    todoer_id: 3,
    project_id: 2
  },
  { title: "draft newsletter",
    due_date: "10-20-16",
    author_id: 1,
    todoer_id: 4,
    project_id: 2
  },
  { title: "book photo session",
    due_date: "10-23-16",
    author_id: 1,
    todoer_id: 1,
    project_id: 2
  },
  ])

projects = Project.create([
  { title: "Spring curriculum professional development session",
    description: "Tentatively scheduled for mid-November. Expected number of participants: 30-50.",
    team_id: 1,
    author_id: 1},
  { title: "Alumni outreach week",
    description: "top priority last week of October",
    team_id: 1,
    author_id: 1},
  { title: "Curriculum First Draft",
    team_id: 1,
    author_id: 4},
  { title: "New Student orientation booklet",
    team_id: 1,
    author_id: 4},
  { title: "New Product launch",
    description: "super secret product will be launched new years eve",
    team_id: 2,
    author_id: 2}
  ])


comments = Comment.create([
  { body: "comment1",
    team_id: 1,
    author_id: 1,
    commentable_id: 1,
    commentable_type: 'Todo'},
    { body: "comment2",
      team_id: 1,
      author_id: 1,
      commentable_id: 1,
      commentable_type: 'Todo'}
  ])
