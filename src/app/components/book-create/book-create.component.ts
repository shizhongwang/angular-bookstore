import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../../common/book';
import { BookCategory } from '../../common/book-category';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book: Book = new Book();
  bookCategory: BookCategory = new BookCategory();

  submitted = false;

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit() {
  }

  // createBook(keyword: string){
  //   console.log('keyword', keyword);
  //   this._router.navigateByUrl('/search/'+keyword);
  // }

  showMessage(){
    console.log('keyword');
    this.router.navigateByUrl('book-create-detail');
  }

  // showMessage(){
  //   alert('you click me');
  // }

  createBook(){
    console.log('create book');

    // this.bookCategory.category_id = 1;
    this.bookCategory.id = 1;
    // this.bookCategory.category_name = "";

    this.book.name = "test";
    this.book.unitPrice = 340000;
    this.book.category = this.bookCategory;

    this.save();
    // this._router.navigateByUrl('/search/'+keyword);
  }

  save() {
    this.bookService.createBook(this.book).subscribe(data => {
      console.log(data)
      this.book = new Book();
      // this.gotoList();
    },
    error => console.log(error));
  }

}
