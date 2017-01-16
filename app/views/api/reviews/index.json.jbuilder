@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :title, :rating, :body, :user, :book_id
  end
end
