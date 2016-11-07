class AddAttachmentFileToTodos < ActiveRecord::Migration
  def self.up
    change_table :todos do |t|
      t.attachment :file
    end
  end

  def self.down
    remove_attachment :todos, :file
  end
end
