class User < ActiveRecord::Base
    has_many :comments
    has_many :posts
    validates :first_name, :last_name, :email, :password, :presence => true, :length => {:minimum => 2}
    validates :email, uniqueness: true
end
