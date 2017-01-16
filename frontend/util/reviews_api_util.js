export const fetchAllReviews = (bookId) => {
  return $.ajax({
    method: 'GET',
    url: `api/reviews?bookId=${bookId}`
  });
};

export const addReview = (review, bookId) => {
  return $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review: review, book_id: bookId },
    dataType: 'json'
  });
};
