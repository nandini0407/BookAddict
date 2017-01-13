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
  - gets all books if no query params
  - filters and gets books based on query params if present (query params = bookshelf_id or read_status)
- `GET /api/books/:book_id`

### Bookshelves

- `GET /api/bookshelves`
  - gets all bookshelves for current user
- `POST /api/bookshelves`
  - creates bookshelf

### BookshelfBooks

- `POST /api/bookshelf_books`
  - accepts bookshelf_id and book_id query params and adds the book to the bookshelf of the current user
- `DELETE /api/bookshelf_books/:id`
  - acepts bookshelf_id and book_id query params and deletes book from the bookshelf of the current user

### Reviews

- `POST /api/reviews/:book_id`
- `GET /api/reviews/:book_id`

### ReadStatus

- `GET /api/read_status`
  - gets a list of statuses (have read, reading, will read)
- `POST /api/read_status`
  - accepts book_id and status as query params and adds book to the status of the current user
- `PATCH /api/read_status`
  - accepts book_id and status as query params and updates book to the status of the current user
- `DELETE /api/read_status`
  - accepts book_id as book_id as query param and deletes book from its existing status of the current user
