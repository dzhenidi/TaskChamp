class Team < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  has_many :members,
    foreign_key: user_id,
    class_name: 'User'
end
