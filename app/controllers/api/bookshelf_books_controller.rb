class Api::BookshelfBooksController < ApplicationController

  before_action :require_user

  def create
    puts bookshelf_book_params, "here"
    book_id = bookshelf_book_params[:book_id]

    bookshelves = book.bookshelves.where(user_id: current_user.id)
    bookshelves.each do |bookshelf|
      bookshelf_book = BookShelfBook.where("book_id = ? AND bookshelf_id = ?", book_id, bookshelf.id)
      bookshelf_book.destroy
    end

    bookshelf_book_params[:bookshelves].each do | _, bookshelf |
      bookshelf_book = BookshelfBook.new(book_id: book_id, bookshelf_id: bookshelf[:id])
      unless bookshelf_book.save
        render json: bookshelf_book.errors.full_messages, status: 422
      end
    end

    @book = Book.find(book_id)
    @bookshelves = @book.bookshelves
    render `api/books/show`

    # @bookshelf_book = BookshelfBook.new(bookshelf_book_params)
    # if @bookshelf_book.save
    #   @book = @bookshelf_book.book
    #   @bookshelves = @book.bookshelves
    #   render 'api/books/show'
    # else
    #   render json: @bookshelf_book.errors.full_messages, status: 422
    # end
  end

  def destroy
    @bookshelf_book = BookshelfBook.where("book_id = ? AND bookshelf_id = ?", params[:book_id], params[:bookshelf_id])
    @book = @bookshelf_book.book
    @bookshelf_book.destroy
    @bookshelves = @book.bookshelves
                    .where(user_id: current_user.id)
                    .order('name ASC')
    render 'api/books/show'
  end

  private

  def bookshelf_book_params
    params.require(:bookshelf_book).permit(:book_id, :bookshelves)
  end

end
