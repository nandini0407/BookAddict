class Api::ReadStatusBooksController < ApplicationController

  before_action :require_user

  def create
    book_id = read_status_books_params[:book_id]
    read_status_book = ReadStatusBook.where("book_id = ? AND user_id", book_id, current_user.id)
    read_status_book.destroy_all
    read_status_id = read_status_books_params[:read_status_id]
    new_read_status_book = ReadStatusBook.new(book_id: book_id, read_status_id: read_status_id, user_id: current_user.id)
    if new_read_status_book.save
      render 'api/books/show'
    else
      render json: new_read_status_book.errors.full_messages, status: 422
    end
  end

  private

  def read_status_books_params
    params.permit(:book_id, :read_status_id)
  end

end
