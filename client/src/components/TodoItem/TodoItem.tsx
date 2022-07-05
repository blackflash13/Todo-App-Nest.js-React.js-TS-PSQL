import { ITodo } from "../types/types";

interface ITodoProps {
  todo: ITodo;
}

export const TodoItem = ({ todo }: ITodoProps) => {
  return (
    <li>
      <div className="">
        <span>{todo.title}</span>
      </div>
      <div>
        <button className="btn btn-primary">Update</button>
        <button className="btn btn-success">Complete</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
};
