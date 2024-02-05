import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/Task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task) private TaskRepository: Repository<Task>
  ){};

  async create(createTaskDto: CreateTaskDto): Promise<string> {
    try {
      const newTask = new Task();
      newTask.name = createTaskDto.name;
      newTask.description = createTaskDto.description;

      await this.TaskRepository.save(newTask);
      return 'saved';
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(): Promise<UpdateTaskDto[]> {
    try {
      const result = await this.TaskRepository.find();
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: number): Promise<UpdateTaskDto> {
    try {
      const result = await this.TaskRepository.findOneBy({id});
      return result
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    try {
      const result = await this.TaskRepository.update({ id }, { ...updateTaskDto });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id: number) {
    try {
      await this.TaskRepository.delete({ id });
      return 'deleted'
    } catch (error) {
      throw new Error(error);
    }
  }
}
