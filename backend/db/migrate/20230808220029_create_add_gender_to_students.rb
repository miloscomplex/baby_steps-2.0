class CreateAddGenderToStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :add_gender_to_students do |t|
      t.string :gender

      t.timestamps
    end
  end
end
