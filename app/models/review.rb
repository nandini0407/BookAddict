class Review < ActiveRecord::Base

  validates :title, :rating, :body, :user, :book, presence: true

  belongs_to :user
  belongs_to :book

end
