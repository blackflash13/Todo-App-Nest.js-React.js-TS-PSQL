import { ITodo } from "../types/types";

interface ITodoProps {
  todo: ITodo;
}

export const TodoItem = ({ todo }: ITodoProps) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className="">
        <span>{todo.title}</span>
      </div>
      <div>
        <button className="btn btn-primary me-2">Update</button>
        <button className="btn btn-success me-2">Complete</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </li>
  );
};
