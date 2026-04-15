import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AuthorsService {
  private authors: any[] = [];

  findAll() {
    return this.authors;
  }

  findOne(id: number) {
    const author = this.authors.find((a) => a.id === id);
    if (!author) throw new NotFoundException('Автора не знайдено');
    return author;
  }

  create(author) {
    this.authors.push(author);
    return author;
  }

  update(id: number, data: any) {
    const author = this.findOne(id);
    Object.assign(author, data);
    return author;
  }

  remove(id: number) {
    const index = this.authors.findIndex((a) => a.id === id);
    if (index === -1) throw new NotFoundException('Автора не знайдено');
    this.authors.splice(index, 1);
    return { message: 'Автора видалено' };
  }
}
