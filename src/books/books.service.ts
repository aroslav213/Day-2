import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BooksService {
    private books = [
        {
            id: 1,
            title: 'Гаррі Поттер',
            genre: 'Фентезі',
            authorId: 1,
            isReserved: false,
        },
    ];

    findAll() {
        return this.books;
    }

    findOne(id: number) {
        const book = this.books.find((b) => b.id === id);
        if (!book) throw new NotFoundException('Книгу не знайдено');
        return book;
    }

    create(book: any) {
        this.books.push(book);
        return book;
    }
}