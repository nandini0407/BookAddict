class Api::BookshelvesController < ApplicationController

  before_action :require_user

  def index
    @bookshelves = Bookshelf
                    .where("user_id = #{current_user.id}")
                    .order('name ASC')
  end

  def create
    @bookshelf = Bookshelf.new(bookshelf_params)
    @bookshelf.user_id = current_user.id
    if @bookshelf.save
      render 'api/books/index', @books = Book.all
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  private

  def bookshelf_params
    params.require(:bookshelf).permit(:name)
  end

end
