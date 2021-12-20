import { BookCategory } from "./book-category";

export class Book {
    id: string;
    firstParty: string;
    name: string;
    description: string;
    amount: number;
    imageUrl: string;
    active: boolean;
    unitsInStock: number;
    createAt: Date;
    updateAt: Date;
    category: BookCategory;

}
