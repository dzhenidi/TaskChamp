json.extract! user, :username

if user.teammates
  json.teamMates do
    json.array! user.teammates.each do |mate|
      mate, :id, :username
    end
  end
end
