# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_10_04_041325) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "care_givers", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
  end

  create_table "children", force: :cascade do |t|
    t.string "name"
    t.string "birthdate"
    t.string "gender"
    t.integer "care_giver_id"
  end

  create_table "logs", force: :cascade do |t|
    t.integer "child_id"
    t.string "first_nap_time"
    t.string "first_nap_duration"
    t.string "second_nap_time"
    t.string "second_nap_duration"
    t.integer "wet_diapers"
    t.integer "solied_diapers"
    t.string "first_feeding"
    t.string "second_feeding"
    t.string "third_feeding"
    t.boolean "art_and_crafts"
    t.boolean "gym_time"
    t.boolean "independent_play_time"
    t.boolean "music_time"
    t.boolean "story_time"
    t.boolean "tummy_time"
    t.boolean "sensory_play_time"
    t.string "notes"
  end

end
