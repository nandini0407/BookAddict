class Api::BooksController < ApplicationController

  before_action :require_user

  def index
    if params[:bookshelfId]
      bookshelf = Bookshelf.where("id = ? AND user_id = ?", params[:bookshelfId], current_user.id)
      @books = bookshelf[0].books
      @heading = bookshelf[0].name
    elsif params[:readStatusId]
      read_status = ReadStatus.find(params[:readStatusId])
      read_status_books = ReadStatusBook.where(read_status_id: read_status.id, user_id: current_user.id)
      book_ids = []
      read_status_books.each do |rsb|
        book_ids << rsb.book_id
      end

      @books = []
      book_ids.each do |book_id|
        @books << Book.find(book_id)
      end

      @heading = read_status.name
    elsif query
      @books = Book.where("title LIKE ? OR author LIKE ?", "%#{query}%", "%#{query}%")
      @heading = "Search Results"
    else
      @books = Book.all
      @heading = "All Books"
    end
  end

  def show
    @book = Book.find(params[:id])
    @bookshelves = @book.bookshelves
                    .where(user_id: current_user.id)
                    .order('name ASC')
    rs_book = @book.read_status_books
                          .where(user_id: current_user.id)
    if rs_book.length > 0
      @read_status = rs_book[0].read_status
    else
      @read_status = ReadStatus.new({ id: "", name: "" })
    end

    reviews = Review.where("book_id = ?", params[:id])
    total_rating = 0
    num_reviews = 0
    reviews.each do |review|
      total_rating += review.rating
      num_reviews += 1
    end
    if num_reviews <= 0
      @average_rating = 0
    else
      @average_rating = total_rating / num_reviews
    end

  end

  private

  def query
    params[:query]
  end

end
