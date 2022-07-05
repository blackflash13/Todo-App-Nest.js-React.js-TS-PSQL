import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../redux/actions";
import { ITodoReducer } from "../types/types";

export const TodoForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    const todoObject = {
      title,
      done: false
    }

    //@ts-ignore
    dispatch(createTodo(todoObject));
    setTitle("");
  };

  const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <>
      <form
        className="d-flex justify-content-around align-items-end"
        onSubmit={handleSubmit}
      >
        <div className="col-md-10 form-group">
          <label htmlFor="case" className="form-label">
            Enter the case name
          </label>
          <input
            type="text"
            className="form-control"
            id="case"
            onChange={handleChangeInputValue}
          />
        </div>
        <button className="col-md-1 btn btn-success">Create</button>
      </form>
    </>
  );
};
