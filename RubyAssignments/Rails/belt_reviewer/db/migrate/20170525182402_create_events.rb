class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.references :host, index: true, foreign_key: true
      t.string :location
      t.date :event_date

      t.timestamps null: false
    end
  end
end
