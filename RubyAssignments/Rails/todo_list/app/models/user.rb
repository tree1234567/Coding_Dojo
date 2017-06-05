class User < ActiveRecord::Base
    has_many :tasks
    validates :username, :password, :presence => true, :length => {:minimum => 2}
    validates :username, uniqueness: true
end
