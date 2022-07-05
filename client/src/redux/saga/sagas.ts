import { call, Effect, put } from "redux-saga/effects";
import { TodoApi } from "../../api";
import { ICreateAction, ITodo, ITodoActionTypes } from "../../types/types";

// функція генератор
function* sagaCreateTodo(action: ICreateAction): Generator<Effect, void> {
  try {
    const todoObject: Partial<ITodo> = {
      title: action.payload,
      done: false,
    };

    const todo = yield call(TodoApi.createTodo, todoObject);

    yield put({
      type: ITodoActionTypes.CREATE_TODO,
      payload: todoObject,
    });
  } catch (err) {
    console.log("Error", err);
  }
}
