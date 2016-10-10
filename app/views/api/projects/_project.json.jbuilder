json.extract! project,
  :id, :title, :description
json.team project.team.name



if project.todos.first
  json.todos do
    project.todos.each do |todo|
      json.set! todo.id do
        json.partial! 'api/todos/todo',  todo: todo
      end
    end
  end
else
  json.set! :todos, {}
end

# return todos = []

# if project.todos
#   json.todos do
#     json.array! project.todos.each do |todo|
#       json.partial! 'api/todos/todo', todo: todo
#     end
#   end
# else
#   json.todos []
# end
