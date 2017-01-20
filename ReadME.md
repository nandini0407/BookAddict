# BookAddict

[BookAddict live] [heroku]
[heroku]: https://bookaddict.herokuapp.com

BookAddict is a full-stack web application inspired by Goodreads. It is built on Ruby on Rails on the backend, PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation

BookAddict is single page app which allows users to browse books, view and create reviews for a book, create bookshelves and add books to their bookshelves. Users can also mark books as read, reading etc.

### Books

Books are saved in a `books` table in the database, with columns for `id`, `title`, `author`, `image_url`, `publisher`, `date`, `description` and links for amazon, kobo and google play. Upon logging in, all books are rendered on the page after making an API call to the books controller. Books are held in `booksSummary` key in the store. Books are rendered in a `BookList` component, which in turn renders a `BookListItem` for each book. The UI for BookList was partly inspired by Google Play.

![image of book list] (docs/screenshots/book-list.png)

```javascript
class BookList extends React.Component {
  render() {
    let booksSummary;
    if (this.props.booksSummary.books === undefined) {
      booksSummary = <div></div>;
    } else {
      let booksSummaryIds = Object.keys(this.props.booksSummary.books);
      booksSummary = booksSummaryIds.map((id, idx) => {
        return <BookListItem
          key={idx}
          book={this.props.booksSummary.books[id]}
          />;
      });
    }

    return (
      <div className="main">
        <h1 className="heading">{this.props.booksSummary.heading}</h1>
        <div className="book-list-item">
          { booksSummary }
        </div>
      </div>
    );
  }
}
```

Upon clicking an individual book, details about that book are rendered in a `BookDetail` component, which is a child of `BookShow` component.

![image of book detail] (docs/screenshots/book-detail.png)

### Bookshelves

Bookshelves are maintained in a `bookshelves` table in the backend, which has columns for `name` and `user_id`. On the frontend, the list of bookshelves owned by a user are stored in `bookshelves` key in the store. The list of bookshelves owned by a user are rendered in a `MyBookshelves` component, which is a child of `MyBooks` component, which in turn is rendered by `Sidebar` component. Upon clicking a bookshelf on the sidebar, the `BookList` component renders books which are contained in that bookshelf.

```ruby
def index
  if params[:bookshelfId]
    bookshelf = Bookshelf.where("id = ? AND user_id = ?", params[:bookshelfId], current_user.id)
    @books = bookshelf[0].books
    @heading = bookshelf[0].name
  end
end
```

![image of my_bookshelves] (docs/screenshots/my-bookshelves.png)

Bookshelves of the user are also visible in a multi select dropdown on the `BookDetail` component. This dropdown allows the user to include the book in many bookshelves. A join table `bookshelf_books`, with columns `id`, `book_id` and `bookshelf_id`, maintains records of the addition/removal of a book for a bookshelf.

![image of bookshelf_dropdown] (docs/screenshots/bookshelf-dropdown.png)

Bookshelves multi-select dropdown was implemented by `react-select` library.

### Read Status

Read Status also has a table in the backend, having columns `id`, `name`. The list of read statuses are maintained on the frontend in a `readStatuses` key in the store. The list of read statuses are rendered in a `MyReadStatus` component, which is rendered by `MyBooks` component in the sidebar, similar to bookshelves. Clicking on a read status in the sidebar renders `BookList` component with books marked with that read status.

![image of my_read_status] (docs/screenshots/my-read-status.png)

Read status for a book for the user is rendered as a dropdown in the `BookDetail` component. Users can switch from one read status to another. A join table `read_status_books`, with columns `id`, `user_id`, `book_id` and `read_status_id` records any update to the read status made by the user for a book.

![image of read_status_dropdown] (docs/screenshots/read-status-dropdown.png)

```javascript
  return (
    <div className="choose-read-status">
      <div className="your-read-status" >Your Read Status</div>
        <Select
          placeholder="Choose Read Status"
          options={ readStatuses }
          value={ this.state.readStatus }
          onChange={ this.handleReadStatusChange }
          />
    </div>
  );
```

Read Status dropdown was implemented by `react-select` library.

### Reviews

Reviews have a `reviews` table on the backend, with `id`, `title`, `rating`, `body`, `user_id` and `book_id` columns. Reviews for a book are saved in a `reviews` key in the frontend's store. Reviews for a particular book are rendered in a `Reviews` component, which is rendered inside `BookShow` component, underneath the `BookDetail` component. It shows a form to write a new review. It also lists all the reviews for that book, with the most recent one at the top.

```javascript
class BookShow extends React.Component {
  render() {
    return (
      <div className="book-show">
        <BookDetailContainer
          className="book-detail-container"
          bookId={this.props.params.bookId}
          />
        <ReviewsContainer
          className="reviews-container"
          bookId={this.props.params.bookId}
          />
      </div>
    );
  }
}
```

![image of reviews] (docs/screenshots/reviews.png)

Review form was implemented using `react-modal` library and rating was implemented by `react-rating` library.

### Search

On the backend, search is handled by `GET /api/books` API endpoint, which filters based on the search query. Books are filtered by both title and author. On the frontend, search results are rendered in `BookList` component.

```ruby
def index
  if query
    @books = Book.where("title ILIKE ? OR author ILIKE ?", "%#{query}%", "%#{query}%")
    @heading = "Search Results"
  end
end
```

### Infinite Scrolling

To make loading more efficient for `BookList` component, infinite scrolling was implemented using `react-infinite-scroller` library.

## Future Directions for the Project

In addition to the above features, the following are in the pipeline.

### Allow users to add books

Users will be provided with a form to add books to the BookAddict database. Image uploading will be handled by Cloudinary.

### Tags

To make searching easier and faster, books can be tagged with specific tags. Users are allowed to add tags.
