class AddNotesToLogs < ActiveRecord::Migration[6.1]
  def change
    add_column :logs, :notes, :string
  end
end
