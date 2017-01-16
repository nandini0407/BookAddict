class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.integer :rating, null: false
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :book_id, null: false

      t.timestamps null: false
    end

    add_index :reviews, :user_id
    add_index :reviews, :book_id
  end
end
