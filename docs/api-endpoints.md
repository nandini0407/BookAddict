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
  - accepts bookshelf_id and book_id query params and deletes book from the bookshelf of the current user

### Reviews

- `GET /api/reviews/`
  - accepts book_id as a query param and fetches all reviews for that book
- `POST /api/reviews/`
  - accepts book_id as a query param and creates review for that book

### ReadStatus

- `GET /api/read_statuses`
  - gets a list of statuses (have read, reading, will read)

### ReadStatusBooks

- `POST /api/read_status_books`
  - accepts book_id and status as query params and adds book to the status of the current user, also updates the status if new status is chosen, sets status to empty if nothing is chosen
