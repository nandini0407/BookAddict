export const fetchBooksSummary = () => {
  return $.ajax({
    method: 'GET',
    url: `api/books`
  });
};

export const fetchBookDetail = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/books/${id}`
  });
};
