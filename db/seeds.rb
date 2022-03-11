# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'Todd', password: 'abc123')
Place.create(user_id: User.first.id, name:"Camp Tejas", address:"4224 Lake Lane Georgetown, TX 78654", price:"$", category:"Park", notes:"Very cool place to stay!  Great l
ake with views. Stayed in spot 2", image:"https://tpwd.texas.gov/fishboat/fish/recreational/lakes/images/georgetown.gif")

