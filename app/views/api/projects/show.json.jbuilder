json.project do
  json.partial! '/api/projects/project', project: @project
  json.commentIds @project.comment_ids
end



json.comments do
  @project.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end
