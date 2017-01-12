class BookshelfBook < ActiveRecord::Base

  validates :bookshelf, :book, presence: true

  belongs_to :book
  belongs_to :bookshelf

end
