export const fetchBooksSummary = () => {
  return $.ajax({
    method: 'GET',
    url: `api/books`
  });
};

export const fetctBookDetail = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/books/${id}`
  });
};
