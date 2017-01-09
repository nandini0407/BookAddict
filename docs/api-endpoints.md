# API Endpoints

## HTML API

### Root

- `GET /`

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Books

- `GET /api/books`
- `GET /api/books/:book_id`

### Bookshelves

- `GET /api/bookshelves`
  - gets all bookshelves for current user
- `POST /api/bookshelves`
- `GET /api/bookshelves/:bookshelf_id`
  - gets all books in a particular bookshelf

### BookshelfBooks

- `POST /api/bookshelf_books`
  - accepts bookshelf_id and book_id query params and adds the book to the bookshelf of the current user
- `DELETE /api/bookshelf_books`
  - acepts bookshelf_id and book_id query params and deletes book from the bookshelf of the current user

### Reviews

- `POST /api/reviews/:book_id`
- `GET /api/reviews/:book_id`

### ReadStatus

- `GET /api/read_status`
  - if no query param is specified, it returns a list of statuses (have read, reading, will read)
  - if query params are specified for a given status, then a list of books for that status will be returned for the current user
- `POST /api/read_status`
  - accepts book_id and status as query params and adds book to the status of the current user
- `DELETE /api/read_status`
  - accepts book_id as book_id as query param and deletes book from its existing status of the current user
