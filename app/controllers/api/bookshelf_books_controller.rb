class Api::BookshelfBooksController < ApplicationController

  before_action :require_user

  def create
    book_id = bookshelf_book_params[:book_id]

    bookshelves = Book.find(book_id).bookshelves.where(user_id: current_user.id)
    bookshelves.each do |bookshelf|
      bookshelf_book = BookshelfBook.where("book_id = ? AND bookshelf_id = ?", book_id, bookshelf.id)
      bookshelf_book.destroy_all
    end

    unless bookshelf_book_params[:bookshelfIds] == [""]
      bookshelf_book_params[:bookshelfIds].each do | bookshelf_id |
        bookshelf_book = BookshelfBook.new(book_id: book_id, bookshelf_id: bookshelf_id)
        unless bookshelf_book.save
          render json: bookshelf_book.errors.full_messages, status: 422
          return
        end
      end
    end

    @book = Book.find(book_id)
    @bookshelves = @book.bookshelves
    rs_book = @book.read_status_books
                          .where(user_id: current_user.id)
    if rs_book.length > 0
      @read_status = rs_book[0].read_status
    else
      @read_status = ReadStatus.new({ id: "", name: "" })
    end
    render 'api/books/show'
  end

  private

  def bookshelf_book_params
    params.permit(:book_id, bookshelfIds: [])
  end

end
