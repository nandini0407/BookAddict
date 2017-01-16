class Api::ReadStatusBooksController < ApplicationController

  before_action :require_user

  def create
    book_id = read_status_books_params[:book_id]
    read_status_book = ReadStatusBook.where("book_id = ? AND user_id = ?", book_id, current_user.id)
    if read_status_book.length > 0
      read_status_book.destroy_all
    end

    read_status_id = read_status_books_params[:read_status_id]

    unless read_status_id == ""
      new_read_status_book = ReadStatusBook.new(book_id: book_id, read_status_id: read_status_id, user_id: current_user.id)
      unless new_read_status_book.save
        render json: new_read_status_book.errors.full_messages, status: 422
        return
      end
    end

    if read_status_id == ""
      @read_status = ReadStatus.new(id: "", name: "")
    else
      @read_status = ReadStatus.find(read_status_id)
    end

    @book = Book.find(book_id)
    @bookshelves = @book.bookshelves

    render 'api/books/show'
  end

  private

  def read_status_books_params
    params.permit(:book_id, :read_status_id)
  end

end
