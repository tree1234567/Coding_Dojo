# h = {first_name: "Coding", last_name: "Dojo"}
# h.delete :last_name
# puts h 

# .empty? => returns true if hash contains no key-value pairs
# h = {}
# puts h.empty?

# .has_key?(key) returns true if given key is present
# h = {first_name: "Coding", last_name: "Dojo"}
# puts h.has_key? :first_name # => true
# puts h.has_key? "first_name" # => false

# .has_value?(value) returns true if given value is present for some key
# h = {first_name: "Coding", last_name: "Dojo"}
# puts h.has_value? "Coding" # => true
# puts h.has_value? "Bootcamp" # => false


a = {first_name: "Michael", last_name: "Choi"}
b = {first_name: "John", last_name: "Doe"}
c = {first_name: "Jane", last_name: "Doe"}
d = {first_name: "James", last_name: "Smith"}
e = {first_name: "Jennifer", last_name: "Smith"}
names = [a, b, c, d, e]

names.each{|name| puts name[:first_name] + " " + name[:last_name]}