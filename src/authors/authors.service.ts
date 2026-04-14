import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorsService {
    private authors = [
        {
            id: 1,
            name: 'Джоан Роулінг',
        },
    ];

    findAll() {
        return this.authors;
    }

    create(author: any) {
        this.authors.push(author);
        return author;
    }
}