class Api::BookshelvesController < ApplicationController

  before_action :require_user

  def index
    @bookshelves = Bookshelf
                    .where("user_id = #{current_user.id}")
                    .order('name ASC')
  end

  def create
    @bookshelf = Bookshelf.new(bookshelf_params)
    @books = Book.all
    @bookshelf.user_id = current_user.id
    if @bookshelf.save
      @bookshelves = Bookshelf
                      .where("user_id = #{current_user.id}")
                      .order('name ASC')
      render json: { id: @bookshelf.id, name: @bookshelf.name }
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end

  def destroy
    @bookshelf = Bookshelf.find(params[:id])
    id = @bookshelf.id
    name = @bookshelf.name
    @bookshelf.destroy
    render json: { id: id, name: name }
  end

  private

  def bookshelf_params
    params.require(:bookshelf).permit(:name)
  end

end
