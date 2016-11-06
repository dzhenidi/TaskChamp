json.extract! user, :username
json.teamName user.team.name
json.avatar_url asset_path(user.avatar.url)

if user.teammates
  json.set! :teammates do
      user.teammates.each do |mate|
      json.set! mate.username, mate.id
    end
  end
end
