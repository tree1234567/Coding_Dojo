class User < ActiveRecord::Base
  has_secure_password
  has_many :events, class_name:"Attending", foreign_key: :user_attending_id #to joining table
  has_many :event_details, through: :events, source: :event

  has_many :event_comments, class_name:"Comment", foreign_key: :user_id
  has_many :subject_of_comments, through: :event_comments, source: :event

end
