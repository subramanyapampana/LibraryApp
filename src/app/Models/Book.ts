import { BookHistory } from "./BookHistory";
import { BookStatus } from "./BookStatus";

export class Book {
  id: number;
  bookCover: string;
  title: string;
  author: string;
  bookStatus: BookStatus;
  bookHistory: BookHistory[];
  details: string;
  constructor() {
    this.id = 0;
    this.bookCover = '';
    this.details = '';  
    this.title = '';
    this.author = '';
    this.bookHistory = [];
    this.bookStatus = BookStatus.None;
  }
}
