class ReadStatusBook < ActiveRecord::Base

  validates :user, :book, :read_status, presence: true

  belongs_to :user
  belongs_to :book
  belongs_to :read_status

end
