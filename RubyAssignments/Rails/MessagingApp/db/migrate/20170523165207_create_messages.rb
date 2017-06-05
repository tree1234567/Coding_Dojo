class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.references :sender, index: true, foreign_key: true
      t.references :reciever, index: true, foreign_key: true
      t.string :content
      t.boolean :viewed

      t.timestamps null: false
    end
  end
end
