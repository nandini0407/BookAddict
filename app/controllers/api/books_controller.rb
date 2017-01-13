class Api::BooksController < ApplicationController

  before_action :require_user

  def index
    if params[:bookshelfId]
      bookshelf = Bookshelf.find(params[:bookshelfId])
      @books = bookshelf.books
      @heading = bookshelf.name
    else
      @books = Book.all
      @heading = "All books"
    end
  end

  def show
    @book = Book.find(params[:id])
    @bookshelves = @book.bookshelves
                    .where(user_id: current_user.id)
                    .order('name ASC')
  end

end
