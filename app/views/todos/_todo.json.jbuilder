json.extract! todo,
  :title,
  :description,
  :author_id,
  :todoer_id,
  :project_id,
  :done,
  :completed_at

json.dueDate todo.due_date
json.author todo.author
json.todoer todo.todoer
json.created_at todo.created_at.to_formatted_s(:short)
