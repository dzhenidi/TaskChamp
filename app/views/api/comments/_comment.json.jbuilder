json.extract! comment, :id, :body, :commentable_id
json.author comment.author.username
json.createdAt comment.created_at.strftime("%b %d")
