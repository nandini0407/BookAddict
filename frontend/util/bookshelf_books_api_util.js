// export const addBookToBookshelf = (bookId, bookshelfId) => {
//   return $.ajax({
//     method: 'POST',
//     url: 'api/bookshelf_books'
//   });
// };
//
// export const removeBookFromBookshelf = (id, bookId, bookshelfId) => {
//   return $.ajax({
//     method: 'DELETE',
//     url: `api/bookshelf_books/${id}`
//   });
// };

export const changeBookshelves = (bookId, bookshelves) => {
  return $.ajax({
    method: 'POST',
    url: `api/bookshelf_books`,
    data: { bookId, bookshelves }
  });
};
