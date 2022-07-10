import { useState } from "react";
import { ITodo } from "../../types/types";
import "./style.css";

interface ITodoProps {
  todo: ITodo;
  deleteTodo: (arg0: string) => void;
  doneTodo: (arg0: string, arg1: boolean) => void;
}

export const TodoItem = ({ todo, deleteTodo, doneTodo }: ITodoProps) => {
  const [isTodoEdit, setTodoEdit] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const handleDelete = () => deleteTodo(todo.id);
  const handleComplete = () => doneTodo(todo.id, !todo.done);

  return (
    <li
      className={`list-group-item d-flex justify-content-between
    ${todo.done ? "list-group-item-success" : ""}`}
    >
      <div className="">
        <span className={`${todo.done ? "title-completed" : ""}`}>
          {todo.title}
        </span>
      </div>
      <div>
        <button className="btn btn-primary me-2">Update</button>
        <button className="btn btn-success me-2" onClick={handleComplete}>
          {todo.done ? "Uncompleted" : "Completed"}
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};
