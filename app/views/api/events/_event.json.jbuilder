json.extract! event, :id, :title, :description
json.participants_names event.users.map {|user| user.username}
json.participants_ids event.users.map {|user| user.id}
json.startDate event.start_date
json.author User.find(event.author_id).username
json.createdAt event.created_at
if event.end_date
  json.endDate event.end_date
else
  json.endDate event.start_date
end
