class CreateBookshelfBooks < ActiveRecord::Migration
  def change
    create_table :bookshelf_books do |t|
      t.integer :book_id, null: false
      t.integer :bookshelf_id, null: false

      t.timestamps null: false
    end

    add_index :bookshelf_books, :book_id
    add_index :bookshelf_books, :bookshelf_id
  end
end
