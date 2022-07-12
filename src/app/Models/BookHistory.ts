export class BookHistory {
  id: number;
  borrowDate: string;
  returnDate: string
  constructor() {
    this.id = 0;
    this.borrowDate = '';
    this.returnDate = '';
  }
}
