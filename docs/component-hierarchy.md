## Component Hierarchy

**Splash**
  - Logo
  - AuthContainer
    + Auth
  - AuthFormContainer
    + AuthForm

**App**
  - Nav
    + Logo
  - Sidebar
    + MyBooks
      - MyReadStatusContainer
        + MyReadStatus
      - MyBookShelvesContainer
        + MyBookShelves
  - BookListContainer
    + BookList
      - BookListItem
  - BookShowContainer
    + BookShow
      - BookDetailContainer
        + BookDetail
      - ReviewsContainer
        + Reviews

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "Splash" |
| "/welcome" | "AuthContainer" |
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/user" | "App" |
| "/user/books" | "BookListContainer" |
| "/user/books/:bookId" | "BookShowContainer" |
| "/user/bookshelves/:bookshelfId" | "BookListContainer" |
| "/user/read-status" | "BookListContainer" |
