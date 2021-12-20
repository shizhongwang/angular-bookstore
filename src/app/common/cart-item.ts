import { Book } from './book';

export class CartItem {
    id: string;
    name: string;
    imageUrl: string;
    amount: number;
    quantity: number;

    constructor(book: Book){
        this.id = book.id;
        this.name = book.name;
        this.imageUrl = book.imageUrl;
        this.amount = book.amount;
        this.quantity = 1
    }
}
