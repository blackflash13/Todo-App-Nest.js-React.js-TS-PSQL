import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Todo } from './models/todo.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTodo } from './dto/create-todo.dto';
import { ChangeTodo } from './dto/change-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo)
    private todoModel: typeof Todo,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModel.findAll();
  }

  async findOne(id: string): Promise<Todo> {
    return this.todoModel.findOne({
      where: { id },
    });
  }

  async create(createTodo: CreateTodo): Promise<Todo> {
    const todo = new Todo();

    todo.title = createTodo.title;
    todo.done = createTodo.done;

    return todo.save();
  }

  async update(
    id: string,
    changeTodo: ChangeTodo,
  ): Promise<[affectedCount: number, affectedRows: Todo[]]> {
    return this.todoModel.update(
      { ...changeTodo },
      {
        where: { id },
        returning: true,
      },
    );
  }

  async remove(id: string) {
    const todo = await this.findOne(id);

    if (!todo) throw new HttpException('Task not found', HttpStatus.NOT_FOUND);

    await todo.destroy();
    return todo;
  }
}
