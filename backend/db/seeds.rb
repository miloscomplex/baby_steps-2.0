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

Student.create(firstname: "Teddy", lastname: "Ruben", birthdate: "09/19/19", arrival: "08:03 AM", user_id: 01)
Student.create(firstname: "Millie", lastname: "Miller", birthdate: "07/16/19", arrival: "08:08 AM", user_id: 01)
Student.create(firstname: "Ollie", lastname: "Richland", birthdate: "03/12/19", arrival: "08:14 AM", user_id: 01)