class Api::BookshelfBooksController < ApplicationController

  before_action :require_user

  def create
    @bookshelf_book = BookshelfBook.new(bookshelf_book_params)
    if @bookshelf_book.save
      @book = @bookshelf_book.book
      @bookshelves = @book.bookshelves
      render 'api/books/show'
    else
      render json: @bookshelf_book.errors.full_messages, status: 422
    end
  end

  def destroy
    @bookshelf_book = BookshelfBook.where("book_id = ? AND bookshelf_id = ?", params[:book_id], params[:bookshelf_id])
    @book = @bookshelf_book.book
    @bookshelf_book.destroy
    @bookshelves = @book.bookshelves
                    .where(user_id: current_user.id)
                    .order('name ASC')
    render 'api/books/show'
  end

  private

  def bookshelf_book_params
    params.require(:bookshelf_book).permit(:book_id, :bookshelf_id)
  end

end
