
Team.destroy_all

team_rolling = Team.create(name: "Rolling Press, Inc")
team_distance = Team.create(name: "The Distance Podcast")


User.destroy_all

  #Rolling Users
  eugene = User.create(
    { username: "Eugene M", password: "starwars", email: "eugene@rollingpress.com", team_id: team_rolling.id}
  )
  jonb = User.create(
    { username: "Jon B.", password: "starwars", email: "jonb@rollingpress.com", team_id: team_rolling.id}
  )
  jroberts = User.create(
    { username: "J. Roberts", password: "starwars", email: "jroberts@rollingpress.com", team_id: team_rolling.id}
  )

#Distance Users
kristen = User.create(
  { username: "Kristen M.", password: "starwars", email: "kristen@distance.com", team_id: team_distance.id}
)
cheryl = User.create(
{ username: "Cheryl Walters", password: "starwars", email: "cwalters@distance.com", team_id: team_distance.id}
)
victor = User.create(
{ username: "Victor Cooper", password: "starwars", email: "vcoopers@distance.com", team_id: team_distance.id}
)
jennifer = User.create(
{ username: "Jennifer Young", password: "starwars", email: "jyoung@distance.com", team_id: team_distance.id}
)
josh = User.create(
{ username: "Josh Fiske", password: "starwars", email: "jfiske@distance.com", team_id: team_distance.id}
)
andrew = User.create(
{ username: "Andrew Wong", password: "starwars", email: "awong@distance.com", team_id: team_distance.id}
)

Project.destroy_all

#Rolling
rolling_project1 = Project.create(
{ title: "Spring curriculum professional development session",
  description: "Tentatively scheduled for mid-November. Expected number of participants: 30-50.",
  team_id: team_rolling.id,
  author_id: eugene.id}
)

rolling_project2 = Project.create(
{ title: "Alumni outreach week",
  description: "top priority last week of October",
  team_id: team_rolling.id,
  author_id: eugene.id}
)

rolling_project3 = Project.create(
{ title: "Curriculum First Draft",
  team_id: team_rolling.id,
  author_id: victor.id}
)

rolling_project4 = Project.create(
{ title: "New Student orientation booklet",
  team_id: team_rolling.id,
  author_id: victor.id}
)

rolling_project5 = Project.create(
{ title: "New Product launch",
  description: "super secret product will be launched new years eve",
  team_id: team_rolling.id,
  author_id: victor.id}
)

#CARMA
carma_ten = Project.create(
{ title: "Episode 10: Carma Labs I",
  description: "Alfred Woelbing made the first batch of Carmex in 1937. He was looking for a cold sore treatment but came up with a hit lip balm instead. Nearly 80 years later, Carma Labs is still private, independent and under family ownership. And the formula hasn't changed very much — it's just made in 100 gallon drums instead of a 12-quart pot.",
  team_id: team_distance.id,
  author_id: kristen.id}
)

carma_eleven = Project.create(
{ title: "Episode 11: Carma Labs II",
  description: "Paul Woelbing, the president of Carma Labs and the grandson of the founder, is on year eight of a personal project to build a massive, 8,000-pipe organ in the company warehouse.",
  team_id: team_distance.id,
  author_id: kristen.id}
)


Todo.destroy_all
  #Rolling
  rolling_todo1 = Todo.create(
    { title: "book space",
      description: "seating over 40 people",
      due_date: "10-08-16",
      author_id: eugene.id,
      todoer_id: jroberts.id,
      project_id: rolling_project1
    }

  )
  rolling_todo2 = Todo.create(

    { title: "order food",
      description: "to arrive before 9am",
      due_date: "12-09-16",
      author_id: eugene.id,
      todoer_id: jroberts.id,
      project_id: rolling_project1
    }
  )
  rolling_todo3 = Todo.create(
      { title: "format powerpoint presentation",
        due_date: "12-10-16",
        author_id: eugene.id,
        todoer_id: jroberts.id,
        project_id: rolling_project1
      }
  )
  rolling_todo4 = Todo.create(
    { title: "update contact info",
      due_date: "01-10-17",
      author_id: jonb.id,
      todoer_id: eugene.id,
      project_id: rolling_project2
    }
  )
  rolling_todo5 = Todo.create(

    { title: "draft newsletter",
      due_date: "02-20-17",
      author_id: jonb.id,
      todoer_id: eugene.id,
      project_id: rolling_project2
    }
  )
  rolling_todo6 = Todo.create(
    { title: "book photo session",
      due_date: "03-23-17",
      author_id: jonb.id,
      todoer_id: eugene.id,
      project_id: rolling_project3
    }
  )
  # TEAM 2: 7-21   kristen cheryl victor jennifer josh andrew carma_te carma_eleven
t1 = Todo.create(
{ title: "copy editing",
  due_date: "10-08-16",
  author_id: kristen.id,
  todoer_id: cheryl.id,
  project_id: carma_ten.id,
  done: true
}
)
t2 = Todo.create(
{ title: "blog post",
  due_date: "10-05-16",
  author_id: victor.id,
  todoer_id: kristen.id,
  project_id: carma_ten.id,
  done: true
}
)
t3 = Todo.create(
{ title: "Newsletter",
  due_date: "10-16-16",
  author_id: jennifer.id,
  todoer_id: kristen.id,
  project_id: carma_ten.id,
  done: false
}
)

t4 = Todo.create(
{ title: "Upload",
  due_date: "10-23-16",
  author_id: andrew.id,
  todoer_id: josh.id,
  project_id: carma_ten.id,
  done: false
}
)
t5 = Todo.create(
{ title: "Title/description/tags/show notes",
    due_date: "11-02-16",
    author_id: kristen.id,
    todoer_id: jennifer.id,
    project_id: carma_ten.id,
    done: false
  })
t6 = Todo.create(  { title: "Record",
    due_date: "09-15-16",
    author_id: jennifer.id,
    todoer_id: josh.id,
    project_id: carma_ten.id,
    done: false
  })
t7 = Todo.create(  { title: "Script & audio files",
    due_date: "09-02-16",
    author_id: victor.id,
    todoer_id: andrew.id,
    project_id: carma_ten.id,
    done: true
  })
t8 = Todo.create(  { title: "Script & audio files",
    due_date: "10-02-16",
    author_id: cheryl.id,
    todoer_id: victor.id,
    project_id: carma_eleven.id,
    done: true
  })
t9 = Todo.create(  { title: "Record",
    due_date: "10-05-16",
    author_id: kristen.id,
    todoer_id: kristen.id,
    project_id: carma_eleven.id,
    done: true
  })
t10 = Todo.create(  { title: "Upload",
    due_date: "10-20-16",
    author_id: cheryl.id,
    todoer_id: victor.id,
    project_id: carma_eleven.id,
    done: false
  })
t11 = Todo.create(  { title: "Blog Post",
    author_id: andrew.id,
    todoer_id: cheryl.id,
    project_id: carma_eleven.id,
    done: false
  })
t12 = Todo.create(  { title: "Newsletter",
    author_id: andrew.id,
    todoer_id: kristen.id,
    project_id: carma_eleven.id,
    done: false
  })
t13 = Todo.create(  { title: "Illustration",
    due_date: "11-20-16",
    author_id: 7,
    todoer_id: 10,
    project_id: carma_eleven.id,
    done: false
  })
t14 = Todo.create(  { title: "Title/description/tags/show notes",
    due_date: "12-01-16",
    author_id: 9,
    todoer_id: andrew.id,
    project_id: carma_eleven.id,
    done: false
  })
t15 = Todo.create(  { title: "Edit",
    due_date: "10-20-16",
    author_id: kristen.id,
    todoer_id: andrew.id,
    project_id: carma_eleven.id,
    done: false
  })




Comment.destroy_all
comments = Comment.create([
  { body: "from the Suite Gothique... the music playing there is not from the Suite Gothique. I think it's the non-classical music that Paul played for me earlier in the interview. The Suite Gothique plays between 18:50 - 22:09.",
    team_id: team_distance.id,
    author_id: kristen.id,
    commentable_id: t12.id,
    commentable_type: 'Todo'},
    { body: "Ah crap! Ok, I'll rework that part.",
      team_id: team_distance.id,
      author_id: jennifer.id,
      commentable_id: t12.id,
      commentable_type: 'Todo'}
  ])
