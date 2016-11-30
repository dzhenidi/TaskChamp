json.extract! event, :id, :title, :description

json.participants event.users do |user|
  json.id user.id
  json.username user.username
  json.avatar asset_path(user.avatar.url(:thumb))
end
json.startDate event.start_date
json.author User.find(event.author_id).username
json.createdAt event.created_at
if event.end_date
  json.endDate event.end_date
else
  json.endDate event.start_date
end
