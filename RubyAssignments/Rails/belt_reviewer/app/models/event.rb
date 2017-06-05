class Event < ActiveRecord::Base
  belongs_to :host, class_name: "User"
  has_many :attending, class_name: "Attending", foreign_key: :event_id
  has_many :attendees, through: :attending, source: :user_attending

  has_many :user_comments, class_name: "Comment", foreign_key: :event_id
  has_many :commenting_users, through: :user_comments, source: :user
end
