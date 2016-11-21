# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  password_digest     :string
#  session_token       :string           not null
#  team_id             :integer          not null
#  email               :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#  uid                 :string
#  provider            :string
#

require 'bcrypt'

class User < ActiveRecord::Base

  attr_reader :password

  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  # validates :password_digest, :session_token, :team_id, presence: true

  has_attached_file :avatar,
    styles: { medium: "30x30#", thumb: "50x50#" },
    default_url: "default_avatar.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

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

  has_many :teammates,
    through: :team,
    source: :members

  has_and_belongs_to_many :events

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.username = auth.info.name
      user.avatar = auth.info.image
      user.email = auth.info.email
      # user.oauth_token = auth.credentials.token
      # user.oauth_expires_at = Time.at(auth.credentials.expires_at)
      # user.save!
    end
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
