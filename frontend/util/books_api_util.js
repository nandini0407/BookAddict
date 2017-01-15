export const fetchBooksSummary = (bookshelfId = null, readStatusId = null) => {
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
