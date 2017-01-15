class ReadStatus < ActiveRecord::Base

  validates :name, presence: true

  has_many :read_status_books
  has_many :users, through: :read_status_books
  has_many :books, through: :read_status_books

end
