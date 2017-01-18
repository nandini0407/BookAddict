export const fetchAllBookshelves = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/bookshelves'
  });
};

export const addBookShelf = (bookshelf) => {
  return $.ajax({
    method: 'POST',
    url: 'api/bookshelves',
    data: { bookshelf }
  });
};

export const deleteBookshelf = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/bookshelves/${id}`
  });
};
