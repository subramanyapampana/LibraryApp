import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../Models/Book';
import { BookStatus } from '../Models/BookStatus';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})

export class AddbookComponent implements OnInit {

  public bookCover: string;
  public title: string;
  public author: string;

  constructor(private router: Router) {
    this.bookCover = '';
    this.title = '';
    this.author = '';
  }

  ngOnInit(): void {
  }

  public AddBook() {
    var book = new Book();
    book.bookCover = this.bookCover;
    book.title = this.title;
    book.author = this.author;
    book.bookStatus = BookStatus.Borrow;
    var service = new BookService();
    service.AddBook(book);
    this.router.navigate(['/list']);
  }

  public BackToBookList() {
    this.router.navigate(['/list']);
  }
}
