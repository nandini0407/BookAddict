class Api::ReviewsController < ApplicationController

  before_action :require_user

  def index
    @reviews = Review.where(params[:book_id])
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      render json: { id: @review.id, title: @review.title, body: @review.body, user_id: @review.user_id, book_id: @review.book_id }
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:title, :rating, :body, :book_id)
  end

end
