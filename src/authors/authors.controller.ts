import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthorsService } from './authors.service';

@Controller('authors')
export class AuthorsController {
    constructor(private readonly authorsService: AuthorsService) { }

    @Get()
    findAll() {
        return this.authorsService.findAll();
    }

    @Post()
    create(@Body() body: any) {
        return this.authorsService.create(body);
    }
}