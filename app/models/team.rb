# == Schema Information
#
# Table name: teams
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  has_many :members,
    class_name: 'User',
    foreign_key: :id

  has_many :projects,
    class_name: 'Project',
    foreign_key: :id
end
