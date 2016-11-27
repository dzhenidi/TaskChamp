json.extract! event, :id, :title, :description
json.participantsNames event.users.map {|user| user.username}
json.participantsIds event.users.map {|user| user.id}
json.participantsAvatars  event.users.map {|user| asset_path(user.avatar.url(:thumb))}
json.startDate event.start_date
json.author User.find(event.author_id).username
json.createdAt event.created_at
if event.end_date
  json.endDate event.end_date
else
  json.endDate event.start_date
end
