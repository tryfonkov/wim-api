import { IsNumber, IsString, IsOptional } from 'class-validator';

export class Category {
  @IsNumber() @IsOptional() readonly id: number;
  @IsString() readonly name: string;
  @IsString() @IsOptional() readonly image: string;
}
