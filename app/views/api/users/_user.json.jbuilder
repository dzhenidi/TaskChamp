json.extract! user, :username

if user.teammates
  json.set! :teammates do
      user.teammates.each do |mate|
      json.set! mate.username, mate.id
    end
  end
end
