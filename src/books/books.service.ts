import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BooksService {
  private books: any[] = require('../../books.json');

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    const book = this.books.find((b) => b.id === id);
    if (!book) throw new NotFoundException(' нигу не знайдено');
    return book;
  }

  create(book) {
    this.books.push(book);
    return book;
  }

  update(id: number, data: any) {
    const book = this.findOne(id);
    Object.assign(book, data);
    return book;
  }

  remove(id: number) {
    const index = this.books.findIndex((b) => b.id === id);
    if (index === -1) throw new NotFoundException(' нигу не знайдено');
    this.books.splice(index, 1);
    return { message: ' нигу видалено' };
  }
}
