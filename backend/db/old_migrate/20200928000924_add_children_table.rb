class AddChildrenTable < ActiveRecord::Migration[6.1]
  def change
    create_table :children do |t|
      t.string :name
      t.string :birthdate
      t.string :gender
    end
  end
end
