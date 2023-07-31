class AddPasswordToCareGivers < ActiveRecord::Migration[6.1]
  def change
    add_column :care_givers, :password_digest, :string
  end
end
