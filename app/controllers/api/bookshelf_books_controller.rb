class Api::BookshelfBooksController < ApplicationController

  before_action :require_user

  def create
    @bookshelf_book = BookshelfBook.new(bookshelf_book_params)
    if @bookshelf_book.save
      render 'api/books/index'
    else
      render json: @bookshelf_book.errors.full_messages, status: 422
    end
  end

  def destroy
    @bookshelf_book = BookshelfBook.find(params[:id])
    @bookshelf_book.destroy
    render 'api/books/index'
  end

  private

  def bookshelf_book_params
    params.require(:bookshelf_book).permit(:book_id, :bookshelf_id)
  end

end
