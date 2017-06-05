class Dojo < ActiveRecord::Base
    has_many :ninjas, dependant: :destroy 
end
