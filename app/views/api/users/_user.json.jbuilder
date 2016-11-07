json.extract! user, :username, :id
json.teamName user.team.name
json.avatarUrl asset_path(user.avatar.url(:original))
json.thumbnailUrl asset_path(user.avatar.url(:thumb))

if user.teammates
  json.set! :teammates do
      user.teammates.each do |mate|
      json.set! mate.username, mate.id
    end
  end
end
