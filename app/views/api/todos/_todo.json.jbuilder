json.extract! todo,
  :id,
  :title,
  :description,
  :author_id,
  :todoer_id,
  :project_id,
  :done

json.dueDate todo.due_date ? todo.due_date.to_formatted_s(:short) : ""
json.author todo.author.username
json.todoer todo.todoer
json.created_at todo.created_at.to_formatted_s(:short)
if todo.completed_at
  json.completed_at todo.completed_at.to_formatted_s(:short)
else
  json.completed_at ""
end
