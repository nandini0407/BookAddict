class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.string :image_url, null: false
      t.string :publisher, null: false
      t.string :date, null: false
      t.text :description, null: false
      t.string :amazon_link, null: false
      t.string :kobo_link, null: false
      t.string :play_link, null: false

      t.timestamps null: false
    end

    add_index :books, :title
    add_index :books, :author
  end
end
