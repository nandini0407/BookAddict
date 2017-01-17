class Api::ReviewsController < ApplicationController

  before_action :require_user

  def index
    all_reviews = Review.where("book_id = ?", params[:bookId])
    @reviews = []
    all_reviews.each do |review|
      user = User.find(review.user_id)
      new_review = {
        id: review.id,
        title: review.title,
        rating: review.rating,
        body: review.body,
        user: user.username,
        book_id: review.book_id,
        created_at: review.created_at
      }
      @reviews << new_review
    end

  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    user = current_user.username
    @review.book_id = params[:book_id]
    if @review.save
      render json: { id: @review.id, title: @review.title, rating: @review.rating, body: @review.body, user: user, book_id: @review.book_id, created_at: @review.created_at }
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:title, :rating, :body)
  end

end
