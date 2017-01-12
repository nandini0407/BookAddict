class Book < ActiveRecord::Base

  validates :title, :author, :image_url, :publisher, :date, :description, :amazon_link, :kobo_link, :play_link, presence: true

  has_many :bookshelf_books
  has_many :bookshelves, through: :bookshelf_books

end
