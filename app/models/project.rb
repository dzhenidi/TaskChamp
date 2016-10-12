# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  author_id   :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  team_id     :integer          not null
#

class Project < ActiveRecord::Base
  validates :title, :author, :team, presence: true

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id

  belongs_to :team,
    class_name: 'Team',
    foreign_key: :team_id

  has_many :todos

  has_many :comments,
    as: :commentable

end
