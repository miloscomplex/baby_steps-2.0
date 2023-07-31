class AddSensoryPlayColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :logs, :sensory_play_time, :boolean
  end
end
