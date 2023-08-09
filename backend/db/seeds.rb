# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create(email: "lisa@gmail.com")
User.create(email: "mike@gmail.com")
User.create(email: "john@gmail.com")

Student.create(firstname: "Teddy", lastname: "Ruben", birthdate: "2019-9-19", arrival: "08:03:00", user_id: 01, img_url: "./images/baby_face-1.jpg")
Student.create(firstname: "Millie", lastname: "Miller", birthdate: "2019-07-16", arrival: "08:08:00", user_id: 01, img_url: "./images/baby_face-2.jpg")
Student.create(firstname: "Ollie", lastname: "Richland", birthdate: "3-12-2019", arrival: "08:14:00", user_id: 01, img_url: "./images/baby_face-3.jpg")