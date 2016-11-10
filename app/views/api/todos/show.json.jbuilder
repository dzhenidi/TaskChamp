json.todo do
  json.partial! '/api/todos/todo', todo: @todo
  json.commentIds @todo.comment_ids
  if @todo.file.exists?
    json.fileUrl asset_path(@todo.file.url(:original))
    json.fileName @todo.file_file_name
    json.fileType @todo.file_content_type
  end
end

if @todo.comments.first
  json.comments do
    @todo.comments.each do |comment|
      json.set! comment.id do
        json.partial! 'api/comments/comment', comment: comment
      end
    end
  end
else
  json.comments {}
end
