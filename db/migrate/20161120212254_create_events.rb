class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date
      t.text :description
    end
  end
end
