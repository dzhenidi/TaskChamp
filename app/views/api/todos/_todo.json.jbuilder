json.extract! todo,
  :id,
  :title,
  :description,
  :author_id,
  :todoer_id,
  :project_id,
  :done

json.author todo.author.username
json.todoer todo.todoer
json.created_at todo.created_at.to_formatted_s(:short)
json.dueDate todo.due_date ? todo.due_date.strftime("%b %d") : ""
json.completedAt todo.completed_at ? todo.completed_at.to_s(:short) : ""
