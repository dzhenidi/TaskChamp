json.extract! project,
  :id, :title, :description

json.team project.team.name

json.todos do
  project.todos.each do |todo|
    json.set! todo.id do
      json.partial! 'api/todos/todo',  todo: todo
    end
end
