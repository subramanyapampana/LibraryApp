import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookService } from '../Services/book.service';
import { Book } from '../Models/Book';
import { BookStatus } from '../Models/BookStatus';
import { Router } from '@angular/router';
import { BookHistory } from '../Models/BookHistory';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  public bookListData: Book[];
  displayedColumns: string[] = ['id', 'bookCover', 'title', 'author', 'status', 'details'];


  constructor(private router: Router) {
    this.bookListData = [];
    this.bookListData = BookService.GenerateInitialBookList();
  }

  ngOnInit(): void {
  }

  public GetBookStatusDesc(statusId: BookStatus) {
    return BookStatus[statusId];
  }
  public toggleBookStatus(book: Book) {
    BookService.UpdateBookStatus(book.id, book.bookStatus);
    console.log(JSON.stringify(BookService.StaticBookListObject));
  }

  public Details(book: Book) {
    this.router.navigate(['/history'], { queryParams: { id: book.id } });
  }

  public AddBook() {
    this.router.navigate(['/add']);
  }
}
