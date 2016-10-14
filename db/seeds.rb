# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
teams = Team.create([
  { name: "Rolling Press, Inc"},
  { name: "The Distance Podcast"}
  { name: "Gowanus Nursery"},
  { name: "Coworkrs on Forth"},
  { name: "Big Reuse Brooklyn"},
  ])

users = User.create([
  #TEAM 1: 1-3
  { username: "Eugene M", password: "starwars", email: "eugene@rollingpress.com", team_id: 1},
  { username: "Jon B.", password: "starwars", email: "jonb@rollingpress.com", team_id: 1},
  { username: "J. Roberts", password: "starwars", email: "jroberts@rollingpress.com", team_id: 1},

  #TEAM 2: 4-10
  { username: "Kristen M.", password: "starwars", email: "kristen@rollingpress.com", team_id: 2},
  { username: "Cheryl Walters", password: "starwars", email: "cwalters@honchodesign.com", team_id: 2},
  { username: "Victor Cooper", password: "starwars", email: "vcoopers@honchodesign.com", team_id: 2},
  { username: "Jennifer Young", password: "starwars", email: "jyoung@honchodesign.com", team_id: 2},
  { username: "Josh Fiske", password: "starwars", email: "jfiske@honchodesign.com", team_id: 2},
  { username: "Andrew Wong", password: "starwars", email: "awong@honchodesign.com", team_id: 2},
  { username: "Jared Davis", password: "starwars", email: "awong@honchodesign.com", team_id: 2},
  ])


todos = Todo.create([
  #TEAM 1 - 6
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
    todoer_id: 3,
    project_id: 2
  },
  { title: "book photo session",
    due_date: "10-23-16",
    author_id: 1,
    todoer_id: 1,
    project_id: 2
  },

  # TEAM 2: 7-21

  { title: "copy editing",
    due_date: "10-08-16",
    author_id: 4,
    todoer_id: 5,
    project_id: 6,
    done: true
  },
  { title: "blog post",
    due_date: "10-05-16",
    author_id: 7,
    todoer_id: 4,
    project_id: 6,
    done: true
  },
  { title: "Newsletter",
    due_date: "10-16-16",
    author_id: 5,
    todoer_id: 4,
    project_id: 6,
    done: false
  },
  { title: "Upload",
    due_date: "10-23-16",
    author_id: 7,
    todoer_id: 8,
    project_id: 6,
    done: false
  },
  { title: "Title/description/tags/show notes",
    due_date: "11-02-16",
    author_id: 7,
    todoer_id: 9,
    project_id: 6,
    done: false
  },
  { title: "Record",
    due_date: "09-15-16",
    author_id: 10,
    todoer_id: 8,
    project_id: 6,
    done: false
  },
  { title: "Script & audio files",
    due_date: "09-02-16",
    author_id: 7,
    todoer_id: 8,
    project_id: 6,
    done: true
  },
  { title: "Script & audio files",
    due_date: "10-02-16",
    author_id: 7,
    todoer_id: 8,
    project_id: 7,
    done: true
  },
  { title: "Record",
    due_date: "10-05-16",
    author_id: 4,
    todoer_id: 5,
    project_id: 7,
    done: true
  },
  { title: "Upload",
    due_date: "10-20-16",
    author_id: 7,
    todoer_id: 10,
    project_id: 7,
    done: false
  },
  { title: "Blog Post",
    author_id: 10,
    todoer_id: 8,
    project_id: 7,
    done: false
  },
  { title: "Newsletter",
    author_id: 4,
    todoer_id: 6,
    project_id: 7,
    done: false
  },
  { title: "Illustration",
    due_date: "11-20-16",
    author_id: 7,
    todoer_id: 10,
    project_id: 7,
    done: false
  },
  { title: "Title/description/tags/show notes",
    due_date: "12-01-16",
    author_id: 9,
    todoer_id: 4,
    project_id: 7,
    done: false
  },
  { title: "Edit",
    due_date: "10-20-16",
    author_id: 6,
    todoer_id: 4,
    project_id: 7,
    done: false
  },

  ])

projects = Project.create([

  #TEAM 1
  { title: "Spring curriculum professional development session",
    description: "Tentatively scheduled for mid-November. Expected number of participants: 30-50.",
    team_id: 2,
    author_id: 1},
  { title: "Alumni outreach week",
    description: "top priority last week of October",
    team_id: 2,
    author_id: 1},
  { title: "Curriculum First Draft",
    team_id: 2,
    author_id: 3},
  { title: "New Student orientation booklet",
    team_id: 2,
    author_id: 3},
  { title: "New Product launch",
    description: "super secret product will be launched new years eve",
    team_id: 2,
    author_id: 2}

    #TEAM 2: 6-7
    { title: "Episode 10: Carma Labs I",
      description: "Alfred Woelbing made the first batch of Carmex in 1937. He was looking for a cold sore treatment but came up with a hit lip balm instead. Nearly 80 years later, Carma Labs is still private, independent and under family ownership. And the formula hasn't changed very much — it's just made in 100 gallon drums instead of a 12-quart pot.",
      team_id: 1,
      author_id: 4}
    { title: "Episode 11: Carma Labs II",
      description: "Paul Woelbing, the president of Carma Labs and the grandson of the founder, is on year eight of a personal project to build a massive, 8,000-pipe organ in the company warehouse.",
      team_id: 1,
      author_id: 5}
  ])




comments = Comment.create([
  { body: "from the Suite Gothique... the music playing there is not from the Suite Gothique. I think it's the non-classical music that Paul played for me earlier in the interview. The Suite Gothique plays between 18:50 - 22:09.",
    team_id: 2,
    author_id: 6,
    commentable_id: 21,
    commentable_type: 'Todo'},
    { body: "Ah crap! Ok, I'll rework that part.",
      team_id: 2,
      author_id: 7,
      commentable_id: 21,
      commentable_type: 'Todo'}
  ])
