export const fetchBooksSummary = (bookshelfId = null) => {
  if (bookshelfId) {
    return $.ajax({
      method: 'GET',
      url: `api/books?bookshelfId=${bookshelfId}`
    });
  } else {
    return $.ajax({
      method: 'GET',
      url: `api/books`
    });
  }
};

export const fetchBookDetail = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/books/${id}`
  });
};

export const addBookToBookshelf = (bookId, bookshelfId) => {
  return $.ajax({
    method: 'POST',
    url: 'api/bookshelf_books'
  });
};

export const removeBookFromBookshelf = (id, bookId, bookshelfId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/bookshelf_books/${id}`
  });
};
