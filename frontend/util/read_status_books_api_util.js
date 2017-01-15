export const addReadStatus = (bookId, readStatusId) => {
  return $.ajax({
    method: 'POST',
    url: `api/read_status_books`,
    data: { book_id: bookId, read_status_id: readStatusId },
    dataType: 'json'
  });
};
