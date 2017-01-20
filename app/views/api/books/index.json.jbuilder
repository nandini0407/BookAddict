
json.books do
  @books.each do |book|
    json.set! book[:id] do
      json.extract! book, :id, :title, :author, :image_url, :average_rating
    end
  end
end

json.heading @heading
