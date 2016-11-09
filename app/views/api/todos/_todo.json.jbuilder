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
  json.dueMonth date.strftime("%_m")
else
  json.set! :dueDate, []
end

if todo.file
  json.fileUrl asset_path(todo.file.url(:original))
  json.fileName todo.file_file_name
  json.fileType todo.file_content_type
end
