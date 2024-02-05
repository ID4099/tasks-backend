import { IsNotEmpty, IsString } from 'class-validator';

export class TaskCreateDto {
  @IsString() @IsNotEmpty()
  name: string;

  @IsString() @IsNotEmpty()
  description: string;
}