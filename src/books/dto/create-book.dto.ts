import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsString()
    genre: string;

    @IsNumber()
    authorId: number;

    @IsBoolean()
    isReserved: boolean;
}