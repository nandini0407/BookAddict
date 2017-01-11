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
    + GreetingContainer
  - Sidebar
    + MyBooks
      - MyReadStatusContainer
        + MyReadStatus
      - MyBookShelvesContainer
        + MyBookShelves
  - BookListContainer
    + BookList
      - BookListItem
  - BookShow
    + BookDetailContainer
      - BookDetail
    + ReviewsContainer
      - Reviews

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "Splash" |
| "/welcome" | "AuthContainer" |
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/user" | "App" |
| "/user/books" | "BookListContainer" |
| "/user/books/:bookId" | "BookShow" |
| "/user/bookshelves/:bookshelfId" | "BookListContainer" |
| "/user/read-status" | "BookListContainer" |
