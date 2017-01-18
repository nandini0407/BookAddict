export const fetchBooksSummary = (bookshelfId = null, readStatusId = null, query = null) => {
  // debugger;
  if (bookshelfId) {
    return $.ajax({
      method: 'GET',
      url: `api/books?bookshelfId=${bookshelfId}`
    });
  } else if (readStatusId) {
    return $.ajax({
      method: 'GET',
      url: `api/books?readStatusId=${readStatusId}`
    });
  } else if (query) {
    return $.ajax({
      method: 'GET',
      url: `api/books?query=${query}`
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
