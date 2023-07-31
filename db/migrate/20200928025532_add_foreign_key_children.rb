class AddForeignKeyChildren < ActiveRecord::Migration[6.1]
  def change
    add_column :children, :care_giver_id, :integer
  end
end
