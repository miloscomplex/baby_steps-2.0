class CreateStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :students do |t|
      t.string :firstname
      t.string :lastname
      t.date :birthdate
      t.time :arrival
      t.string :breakfast
      t.string :morning_snack
      t.string :lunch
      t.string :afternoon_snack
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
