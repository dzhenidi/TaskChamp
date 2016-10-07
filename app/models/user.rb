# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  team_id         :integer          not null
#  email           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'bcrypt'

class User < ActiveRecord::Base

  attr_reader :password

  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, :session_token, :team_id, presence: true

  after_initialize :ensure_session_token

  has_many :todos,
    class_name: 'Todo',
    foreign_key: :todoer_id

  has_many :todo_assignments,
    class_name: 'Todo',
    foreign_key: :author_id

  has_many :projects,
    class_name: 'Project',
    foreign_key: :author_id

  belongs_to :team,
    class_name: 'Team',
    foreign_key: :team_id

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def password=(new_pw)
    @password = new_pw
    self.password_digest = BCrypt::Password.create(new_pw)
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

end
