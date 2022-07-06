import { TodoService } from './todo.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTodo } from './dto/create-todo.dto';
import { ChangeTodo } from './dto/change-todo.dto';

@Controller('/api/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getAllTodos() {
    return this.todoService.findAll();
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-Type', 'application/json')
  createTodo(@Body() createTodo: CreateTodo) {
    return this.todoService.create(createTodo);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  changeTodo(@Param('id') id: string, @Body() changeTodo: ChangeTodo) {
    return this.todoService.update(id, changeTodo);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  removeTodo(@Param('id') id: string) {
    return this.todoService.remove(id);
  }
}
