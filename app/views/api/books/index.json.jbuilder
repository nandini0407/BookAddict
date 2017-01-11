
json.books do
  @books.each do |book|
    json.set! book.id do
      json.extract! book, :id, :title, :author, :image_url
    end
  end
end

json.heading "All books"
