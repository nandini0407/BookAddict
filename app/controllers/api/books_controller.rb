class Api::BooksController < ApplicationController

  before_action :require_user

  def index
    puts "params", params
    if params.bookshelfId
      bookshelf = Bookshelf.find(params[:bookshelfId])
      @books = bookshelf.books
    else
      @books = Book.all
    end
  end

  def show
    @book = Book.find(params[:id])
    @bookshelves = @book.bookshelves
                    .where(user_id: current_user.id)
                    .order('name ASC')
  end

end
