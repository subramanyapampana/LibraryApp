import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookHistory } from '../Models/BookHistory';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'app-bookhistory',
  templateUrl: './bookhistory.component.html',
  styleUrls: ['./bookhistory.component.css']
})
export class BookhistoryComponent implements OnInit {
  public bookHistoryData: BookHistory[];
  displayedColumns: string[] = ['borrowDate', 'returnDate'];
  constructor(private activeRouter: ActivatedRoute, private router: Router) {
    this.bookHistoryData = [];
    this.LoadBookHistoryData();

  }

  ngOnInit(): void {
  }

  public LoadBookHistoryData() {
    debugger;
    var bookId = this.activeRouter.snapshot.queryParamMap.get('id')
    var book = BookService.StaticBookListObject.find(item => item.id.toString() == bookId);
    if (book != undefined) {
      this.bookHistoryData = book.bookHistory;
    }
  }

  public BackToBookList() {
    this.router.navigate(['/list']);
  }
}
