class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.text :description
      t.boolean :done, default: false
      t.datetime :due_date
      t.integer :author_id, null: false
      t.integer :todoer_id, null: false
      t.integer :project_id, null: false

      t.timestamps null: false
    end

    add_index :todos, [:title, :author_id, :todoer_id, :project_id]
  end
end
