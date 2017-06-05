class CreateBlogsUsers < ActiveRecord::Migration
  def change
    create_table :blogs_users do |t|
      t.references :user, index: true, foreign_key: true
      t.references :blog, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
