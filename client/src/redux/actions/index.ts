import { ITodoActionTypes } from "../../types/types";

export const getTodos = () => {
  return {
    type: ITodoActionTypes.GET_TODOS,
  };
};

export const createTodo = (payload: string) => {
  return {
    type: ITodoActionTypes.CREATE_TODO,
    payload,
  };
};

export const completeTodo = (id: string, done: boolean) => {
  return {
    type: ITodoActionTypes.COMPLETE_TODO,
    payload: {
      id,
      done,
    },
  };
};

export const updateTodo = (id: string, title: string, done: boolean) => {
  return {
    type: ITodoActionTypes.UPDATE_TODO,
    payload: {
      id,
      title,
      done,
    },
  };
};

export const deleteTodo = (payload: string) => {
  return {
    type: ITodoActionTypes.DELETE_TODO,
    payload,
  };
};
