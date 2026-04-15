import { IsNumber, IsString } from 'class-validator';

export class CreateAuthorDto {
    @IsNumber()
    id: number;

    @IsString()
    name: string;
}