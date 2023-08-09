class AddImgUrlToStudents < ActiveRecord::Migration[7.0]
  def change
    add_column :students, :img_url, :string
  end
end
