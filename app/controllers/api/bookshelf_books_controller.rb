class Api::BookshelfBooksController < ApplicationController

  before_action :require_user

  def create
    @bookshelf_book = BookshelfBook.new(bookshelf_book_params)
    if @bookshelf_book.save
      render 'api/books/show', @book = @bookshelf_book.book
    else
      render json: @bookshelf_book.errors.full_messages, status: 422
    end
  end

  def destroy
    @bookshelf_book = BookshelfBook.find_by_book_id_and_bookshelf_id(params[:book_id], params[:bookshelf_id])
    book = @bookshelf_book.book
    @bookshelf_book.destroy
    render 'api/books/show', @book = book
  end

  private

  def bookshelf_book_params
    params.require(:bookshelf_book).permit(:book_id, :bookshelf_id)
  end

end
