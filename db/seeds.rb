# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Vote.destroy_all
Answer.destroy_all
Question.destroy_all
User.destroy_all

demo_user = User.create({email: "demouser@email.com", password: "password"})
user1 = User.create({email: "email1@email.com", password: "password"})
user2 = User.create({email: "email2@email.com", password: "password"})
user3 = User.create({email: "email3@email.com", password: "password"})
user4 = User.create({email: "email4@email.com", password: "password"})
user5 = User.create({email: "email5@email.com", password: "password"})
user6 = User.create({email: "email6@email.com", password: "password"})
user7 = User.create({email: "email7@email.com", password: "password"})
user8 = User.create({email: "email8@email.com", password: "password"})
user9 = User.create({email: "email9@email.com", password: "password"})
user10 = User.create({email: "email10@email.com", password: "password"})
user11 = User.create({email: "email11@email.com", password: "password"})
user12 = User.create({email: "email12@email.com", password: "password"})
user13 = User.create({email: "email13@email.com", password: "password"})
user14 = User.create({email: "email14@email.com", password: "password"})
user15 = User.create({email: "email15@email.com", password: "password"})
user16 = User.create({email: "email16@email.com", password: "password"})
user17 = User.create({email: "email17@email.com", password: "password"})
user18 = User.create({email: "email18@email.com", password: "password"})
user19 = User.create({email: "email19@email.com", password: "password"})
user20 = User.create({email: "email20@email.com", password: "password"})


q1 = Question.create({title: "Whats the difference between == and === operators?", body: "Hello, whats the difference between == and === in JavaScript? I've seen != and !== operators as well. Are there more operators?", author_id: user1.id})
q2 = Question.create({title: "What are ownProps in react-redux?", body: "This is a test to see if I can properly create a question", author_id: user1.id})
q3 = Question.create({title: "Why is this.props.match.params empty when I pass in params", body: "I tried to pass params to this.props.match in my React component but the params still return as an empty object. Can anyone help me with figure out why?", author_id: user1.id})
q4 = Question.create({title: "How do you use CSS to get a nav bar to stay at the top of the page? ", body: "I have a navbar but for some reason it won't stay on the top of my page, how do I solve this with CSS?", author_id: user2.id})
q5 = Question.create({title: "Cannot read property x of undefined error, why?", body: "Hey, for some reason I keep getting this error when I try to key into my props, why is that?", author_id: user2.id})
q6 = Question.create({title: "How does the react and redux cycle work?", body: "I've recently started to learn react and redux but I still can't completely wrap my head around how it works, does anyone have a good high overview?", author_id: user2.id})
