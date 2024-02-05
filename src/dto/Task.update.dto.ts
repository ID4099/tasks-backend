import { IsBoolean } from 'class-validator';
import { TaskCreateDto } from './Task.create.dto';

export class TaskUpdateDto extends TaskCreateDto {
    @IsBoolean()
    isActive: boolean;
}