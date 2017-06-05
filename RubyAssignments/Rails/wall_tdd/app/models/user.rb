class User < ActiveRecord::Base
    validates :username, length: {minimum: 5}
    has_many :messages
end
