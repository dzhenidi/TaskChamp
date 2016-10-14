json.extract! comment, :id, :body, :commentable_id, :commentable_type
json.author comment.author.username
json.createdAt comment.created_at.strftime("%b %d")
