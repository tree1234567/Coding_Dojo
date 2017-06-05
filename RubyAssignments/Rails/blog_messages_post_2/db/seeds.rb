# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# blogs = Blog.create([
    
#     {name: 'Dog Blog', description: 'Its a dog with a blog'},
#     {name: 'Cat Blog', description: 'Its a cat with a blog'},
#     {name: 'Hamster Blog', description: 'Its a hamster with a blog'},
#     {name: 'Bird Blog', description: 'Its a bird with a blog'},
#     {name: 'Ferret Blog', description: 'Its a ferret with a blog'},
# ])

users = User.create([

    {first_name: 'Fiddo', last_name: 'Perzinski', email: "fido@fdsa.com"},
    {first_name: 'Kitty', last_name: 'Kat', email: "kitty@fdsa.com"},
    {first_name: 'Hammy', last_name: 'Hamtaro', email: "Hammy@fdsa.com"},
    {first_name: 'Polly', last_name: 'Cracker', email: "polly@fdsa.com"},
    {first_name: 'Feral', last_name: 'Ferret', email: "feral@fdsa.com"}
])