class User < ActiveRecord::Base
    has_many :blogs_users
    has_many :blogs, through: :blogs_users
    has_many :posts
    has_many :messages
end
