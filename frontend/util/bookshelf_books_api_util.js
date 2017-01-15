
export const changeBookshelves = (bookId, bookshelves) => {
  return $.ajax({
    method: 'POST',
    url: `api/bookshelf_books`,
    data: { book_id: bookId, bookshelves: bookshelves },
    dataType: 'json'
  });
};
