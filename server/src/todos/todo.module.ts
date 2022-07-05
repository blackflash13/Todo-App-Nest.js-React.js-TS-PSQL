import { Todo } from './models/todo.model';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

@Module({
  imports: [SequelizeModule.forFeature([Todo])],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
