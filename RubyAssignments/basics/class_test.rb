# class User
#   attr_accessor :first_name, :last_name
#   def initialize(f_name, l_name)
#     @first_name = f_name
#     @last_name = l_name
#   end
# end
# steph = User.new("Stephen", "Curry")
# puts steph.first_name, steph.last_name

# class CodingDojo
#     @@num_of_branches = 0
#     def initialize(id,name,address)
#         @branch_id = id
#         @branch_name = name
#         @branch_address = address
#         @@num_of_branches += 1
#         puts "Created branch %d" % @@num_of_branches
#     end
#     def hello
#         puts "Hello Coding Dojo!"
#     end
#     def display_all
#         puts "Branch ID: %d" % @branch_id.to_s
#         puts "Branch Name: %s" % @branch_name.to_s
#         puts "Branch Address: %s" % @branch_address.to_s
#     end
# end

# brand = CodingDojo.new(253,"CHI CodingDojo", "Uptown Chicago")

# brand.display_all

# class Project
#     def initialize(project, description)
#         @project_name = project
#         @project_description = description
#     end

#     def name
#         puts @project_name
#     end

#     def elevator_pitch
#         puts "%s , %s" % [@project_name, @project_description]
#     end
# end

# project1 = Project.new("Project 1", "Description 1")
# project1.elevator_pitch

# class Mammal
#   def initialize
#     puts "I am alive"
#     self
#   end
#   def breath  
#     puts "Inhale and exhale"
#     self
#   end
  
#   def who_am_i
#     puts self
#     self
#   end
# end
# my_mammal = Mammal.new.who_am_i.breath