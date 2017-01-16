@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :title, :rating, :body, :user_id, :book_id
  end
end
