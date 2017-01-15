class CreateReadStatusBooks < ActiveRecord::Migration
  def change
    create_table :read_status_books do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.integer :read_status_id, null: false

      t.timestamps null: false
    end

    add_index :read_status_books, :user_id
    add_index :read_status_books, :book_id
    add_index :read_status_books, :read_status_id
  end
end
