class Api::BooksController < ApplicationController

  before_action :require_user

  def index
    @books = Book.all
    puts params
  end

  def show
    @book = Book.find(params[:id])
  end

end
