class Book < ActiveRecord::Base

  validates :title, :author, :image_url, :publisher, :date, :description, :amazon_link, :kobo_link, :play_link, presence: true

  has_many :bookshelf_books
  has_many :bookshelves, through: :bookshelf_books
  has_many :read_status_books
  has_many :users,
    through: :read_status_books,
    source: :user
  has_many :read_statuses, through: :read_status_books
  has_many :reviews

end
