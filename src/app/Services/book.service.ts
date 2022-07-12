import { Injectable } from '@angular/core';
import { Book } from '../Models/Book';
import { BookHistory } from '../Models/BookHistory';
import { BookStatus } from '../Models/BookStatus';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  public static StaticBookListObject: Book[] = [];

  constructor() {
  }

  public AddBook(book: Book) {
    debugger;
    this.ValidateNewBook(book);
    book.id = this.GenerateBookId();
    BookService.StaticBookListObject.push(book);
  }

  ValidateNewBook(book: Book) {
    if (book.title == '' || book.author == '') {
      throw new Error('title and author is required to cretae a new book');
    }
  }

  GenerateBookId(): number {
    var lengthOfBookStoreList = BookService.StaticBookListObject.length;
    var newBookId = lengthOfBookStoreList + 1;
    return newBookId;
  }

  public static UpdateBookStatus(id: number, statusId: BookStatus) {
    //Get book
    var book = BookService.StaticBookListObject.find(item => item.id == id);

    //Update BookStatus
    if (book != undefined) {
      book.bookStatus = this.toggleStatus(statusId);
    }

    //Create or Update BookHistory.
    var bookHistory = book?.bookHistory.find(item => item.returnDate == '');
    if (bookHistory == undefined)
    {
      bookHistory = new BookHistory();
      book?.bookHistory.push(bookHistory);
    }

    bookHistory = this.UpdateBookHistory(bookHistory, statusId);
  }

  public static UpdateBookHistory(bookHistory: BookHistory, statusId: BookStatus) {
    if (statusId == BookStatus.Borrow) {
      bookHistory.borrowDate = new Date().toString();
    }
    else if (statusId == BookStatus.Return) {
      bookHistory.returnDate = new Date().toString();
    }

    return bookHistory;
  }

  public static toggleStatus(status: BookStatus) {
    if (status == BookStatus.Borrow) {
      return BookStatus.Return;
    }
    else if (status == BookStatus.Return) {
      return BookStatus.Borrow;
    }
    else {
      return BookStatus.None;
    }
  }

  public static GenerateInitialBookList(): Book[] {
    if (BookService.StaticBookListObject.length == 0) {
      var book1 = new Book();
      book1.id = 1;
      book1.author = 'John';
      book1.bookCover = 'Jungle Book';
      book1.title = 'lost kids';
      book1.bookStatus = BookStatus.Borrow;
      var book2 = new Book();
      book2.id = 2;
      book2.author = 'Jack';
      book2.bookCover = 'New Book';
      book2.title = 'kids adventure';
      book2.bookStatus = BookStatus.Borrow;
      BookService.StaticBookListObject.push(book1);
      BookService.StaticBookListObject.push(book2);
    }
    return BookService.StaticBookListObject;
  }
}
