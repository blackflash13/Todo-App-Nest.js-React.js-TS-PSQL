import axios from "axios";
import { ITodo, ITodoState } from "../types/types";

export class TodoApi {
  static async createTodo(todo: Partial<ITodo>): Promise<ITodoState[]> {
    const res = await axios.post("http://localhost:3001/api/todos", todo);

    return res.data;
  }

  static async deleteTodo(id: string): Promise<void> {
    return axios.delete(`http://localhost:3001/api/todos/${id}`);
  }
}
