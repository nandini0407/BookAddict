json.id @book.id
json.title @book.title
json.author @book.author
json.image_url @book.image_url
json.publisher @book.publisher
json.date @book.date
json. description @book.description
json.amazon_link @book.amazon_link
json.kobo_link @book.kobo_link
json.play_link @book.play_link
json.bookshelves do
  json.array! @bookshelves do |bookshelf|
    json.id bookshelf.id
    json.name bookshelf.name
  end
end
json.read_status do
  json.array! @read_status do |read_status|
    json.id read_status.id
    json.name read_status.name
  end
end
