class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
        t.text :body, null: false
        t.integer :author_id, null: false
        t.integer :team_id, null: false
        t.integer :commentable_id, null: false
        t.string :commentable_type, null: false
      t.timestamps null: false
    end
    add_index :comments, :author_id
    add_index :comments, [:commentable_id, :commentable_type]
  end

end
