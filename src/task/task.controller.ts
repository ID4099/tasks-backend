import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('/new')
  @HttpCode(201)
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get('/bring/all')
  @HttpCode(200)
  findAll() {
    return this.taskService.findAll();
  }

  @Get('/by/:id')
  @HttpCode(200)
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(+id);
  }
}
