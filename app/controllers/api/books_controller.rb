class Api::BooksController < ApplicationController

  before_action :require_user

  def index
    puts params
    if params[:bookshelfId]
      bookshelf = Bookshelf.where("id = ? AND user_id = ?", params[:bookshelfId], current_user.id)
      books = bookshelf.first.books
      @books = []
      books.each do |book|
        average_rating = avg_rating(book.id)
        book_item = {id: book.id, title: book.title, author: book.author, image_url: book.image_url, average_rating: average_rating}
        @books << book_item
      end
      @heading = bookshelf.first.name
    elsif params[:readStatusId]
      read_status = ReadStatus.find(params[:readStatusId])
      read_status_books = ReadStatusBook.where(read_status_id: read_status.id, user_id: current_user.id)
      book_ids = []
      read_status_books.each do |rsb|
        book_ids << rsb.book_id
      end

      books = []
      book_ids.each do |book_id|
        books << Book.find(book_id)
      end

      @books = []
      books.each do |book|
        average_rating = avg_rating(book.id)
        book_item = {id: book.id, title: book.title, author: book.author, image_url: book.image_url, average_rating: average_rating}
        @books << book_item
      end

      @heading = read_status.name
    elsif query
      books = Book.where("title ILIKE ? OR author ILIKE ?", "%#{query}%", "%#{query}%")
      @books = []
      books.each do |book|
        average_rating = avg_rating(book.id)
        book_item = {id: book.id, title: book.title, author: book.author, image_url: book.image_url, average_rating: average_rating}
        @books << book_item
      end
      @heading = "Search Results"
    else
      books = Book.all
      @books = []
      books.each do |book|
        average_rating = avg_rating(book.id)
        book_item = {id: book.id, title: book.title, author: book.author, image_url: book.image_url, average_rating: average_rating}
        @books << book_item
      end
      @heading = "All Books"
    end
  end

  def show
    @book = Book.find(params[:id])
    # grab all bookshelves to which this book belongs, for the current user
    # this is what is displayed in 'Your bookshelves' on the show page
    # the dropdown with all bookshelves for the current user is grabbed from
    # the 'bookshelves' slice of the state instead of 'bookDetail' slice
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

    @average_rating = avg_rating(params[:id])

  end

  private

  def query
    params[:query]
  end

  def avg_rating(id)
    reviews = Review.where("book_id = ?", id)
    total_rating = 0
    num_reviews = 0
    reviews.each do |review|
      total_rating += review.rating
      num_reviews += 1
    end
    if num_reviews <= 0
      average_rating = 0
    else
      average_rating = total_rating / num_reviews
    end
    average_rating
  end

end
