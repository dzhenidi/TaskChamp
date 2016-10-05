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
  ])
