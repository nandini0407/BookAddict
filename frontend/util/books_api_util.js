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
