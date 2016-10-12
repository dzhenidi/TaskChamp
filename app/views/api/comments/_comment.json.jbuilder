json.extract! comment, :id, :body
json.author comment.author.username
json.createdAt comment.created_at.strftime("%b %d")
