class CreateProjecs < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.text :description
      t.timestamps null: false
    end

    add_index :projects, [:author_id]
  end
end
