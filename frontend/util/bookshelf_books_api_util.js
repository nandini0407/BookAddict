
export const changeBookshelves = (bookId, bookshelfIds) => {
  return $.ajax({
    method: 'POST',
    url: `api/bookshelf_books`,
    data: { book_id: bookId, bookshelfIds: bookshelfIds },
    dataType: 'json'
  });
};
