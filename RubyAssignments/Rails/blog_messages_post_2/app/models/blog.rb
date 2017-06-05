class Blog < ActiveRecord::Base
    has_many :blogs_users
    has_many :posts
    has_many :members, through: :blogs_users, source: :user
end
