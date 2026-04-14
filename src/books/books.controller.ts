import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) { }

    @Get()
    findAll() {
        return this.booksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.booksService.findOne(Number(id));
    }

    @Post()
    create(@Body() body: any) {
        return this.booksService.create(body);
    }
}