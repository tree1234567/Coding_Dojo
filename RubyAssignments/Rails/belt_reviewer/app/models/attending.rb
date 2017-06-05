class Attending < ActiveRecord::Base
  belongs_to :user_attending, class_name: "User"
  belongs_to :event, class_name: "Event"
end
