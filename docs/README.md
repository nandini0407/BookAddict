# BookAddict

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://bookaddict.herokuapp.com/

[trello]: https://trello.com/b/i5NtMliG/bookbug

## Minimum Viable Product

BookAddict is a web application inspired by Goodreads, built with Ruby on Rails, PostgreSQL and React/Redux. By the end of week 9 this app will satisfy the following criteria with smooth bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Books - Users can view a list of all books, and can view details of a particular book
- [ ] Bookshelves - Users can create bookshelves and add books to one or more shelves
- [ ] Read Status - Users can mark books as read, reading, will read
- [ ] Reviews - Users can view reviews/ratings of a book and also write their own
- [ ] [Production README] [production-readme]

[production-readme]: production-readme.md

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with back-end and front-end Authentication.

### Phase 2: Book model, API and component (1.5 days)

**Objective:** Users can view all books and also a particular book.

### Phase 3: Bookshelf model, API and component (2 days)

**Objective:** Users can create bookshelves, add books to one or more shelves and view all books in a particular shelf.

### Phase 4: ReadStatus model, API and component (2 days)

**Objective:** Users can mark a book as have read, reading or will read. They can also view all books marked with a particular status.

### Phase 5: Review model, API and components (1.5 days)

**Objective:** Users can view all reviews for a book, and can also create reviews

### Bonus Features (TBD)
- [ ] Search across multiple models
- [ ] Browse by category
- [ ] Tags
- [ ] Social
