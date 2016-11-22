# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  start_date  :datetime         not null
#  end_date    :datetime
#  description :text
#  author_id   :integer
#  created_at  :datetime
#  updated_at  :datetime
#

class Event < ActiveRecord::Base
  validates :start_date, :title, presence: true

  has_and_belongs_to_many :users  

end
