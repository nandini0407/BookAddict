```js
{
  session: {
    currentUser: {
      id: 1,
      email: 'user@appacademy.io'
    },
    errors: []
  },
  booksSummary: {
    books: {
      1: {
        id: 1,
        title: 'Book 1',
        author: 'Author 1',
        image_url: 'path/1'
      },
      2: {
        id: 2,
        title: 'Book 2',
        author: 'Author 2',
        image_url: 'path/2'
      },
      ...
    },
    type: 'bookshelf',
    title: 'Bookshelf name'
  },
  bookDetail: {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
    image_url: 'path/1',
    publisher: 'Publisher 1',
    date: 'Jan 2 2015',
    description: 'Some text summarizing the book plot',
    amazon_link: 'link/to/amazon',
    kobo_link: 'link/to/kobo',
    play_link: 'link/to/play',
    my_read_status: 'have read'
  },
  reviews: {
    1: {
      id: 1,
      title: 'review title',
      body: 'review body',
      user_id: 'whoever wrote this review',
      book_id: 'the book that is being shown on the page'
    },
    ...
  },
  readStatus: ['have read', 'reading', 'will read'],
  bookShelves: {
    { id: 1, name: 'Shelf 1' },
    { id: 2, name: 'Shelf 2' },
    ...
  }
}
```
