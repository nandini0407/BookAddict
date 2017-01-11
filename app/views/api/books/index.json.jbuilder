json.books @books do |book|
  json.title book.title
  json.author book.author
  json.image_url book.image_url
end
