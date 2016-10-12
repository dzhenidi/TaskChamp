# == Schema Information
#
# Table name: todos
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  description  :text
#  done         :boolean          default(FALSE)
#  due_date     :datetime
#  author_id    :integer          not null
#  todoer_id    :integer          not null
#  project_id   :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  completed_at :datetime
#

class Todo < ActiveRecord::Base
  validates :title, :author, :todoer, :project_id, presence: true

  belongs_to :author,
    class_name: 'User',
    foreign_key: :author_id

  belongs_to :todoer,
    class_name: 'User',
    foreign_key: :todoer_id

  belongs_to :project

  has_many :comments,
    as: :commentable

end
