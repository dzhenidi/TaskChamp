json.extract! todo,
  :id,
  :title,
  :description,
  :author_id,
  :todoer_id,
  :project_id,
  :done,
  :due_date

json.author todo.author.username
json.todoer todo.todoer.username
json.projectName todo.project.title
json.createdAt todo.created_at.strftime("%b %d")

json.completedAt todo.completed_at ? todo.completed_at.to_s(:short) : ""

if todo.due_date
  date = todo.due_date
  formatted_date = [date.strftime("%b"), date.strftime("%d")]
  json.dueDate do
    json.array! formatted_date
  end
else
  json.set! :dueDate, []
end

#dueDate string "Oct 5"
# json.dueDate todo.due_date ? todo.due_date.strftime("%b %d") : ""

# dueDate array
# json.dueDate (todo.due_date) do |date|
#   [date.strftime("%b"), date.strftime("%d")]
# end
