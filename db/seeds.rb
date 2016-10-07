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
  { username: "user1", password: "starwars", email: "user1@user1", team_id: 1},
  { username: "user2", password: "starwars", email: "user2@user2", team_id: 2},
  { username: "user3", password: "starwars", email: "user3@user3", team_id: 3},
  { username: "user4", password: "starwars", email: "user4@user4", team_id: 1},
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
    todoer_id: 2,
    project_id: 1
  }
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
