json.extract! event, :id, :title, :description, :start_date
json.participants_names event.users.map {|user| user.name}
json.participants_ids event.users.map {|user| user.id}
if event.end_date
  json.end_date event.end_date
else
  json.end_date event.start_date
end
