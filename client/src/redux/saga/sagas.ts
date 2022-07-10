import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { TodoApi } from "../../api";
import {
  ICreateAction,
  IDeleteAction,
  ITodo,
  ITodoActionTypes,
} from "../../types/types";

// функція генератор
function* sagaGetTodos(): Generator<Effect, void, ITodo[]> {
  try {
    const todos = yield call(TodoApi.getTodos);

    yield put({
      type: ITodoActionTypes.GET_TODOS_SUCCESS,
      payload: todos,
    });
  } catch (err) {
    console.log("Error", err);
  }
}

function* sagaCreateTodo(action: ICreateAction): Generator<Effect, void> {
  try {
    const todoObject: Partial<ITodo> = {
      title: action.payload,
      done: false,
    };

    const todo = yield call(TodoApi.createTodo, todoObject);

    yield put({
      type: ITodoActionTypes.CREATE_TODO_SUCCESS,
      payload: todo,
    });
  } catch (err) {
    console.log("Error", err);
  }
}

function* sagaDeleteTodo(action: IDeleteAction): Generator<Effect, void> {
  try {
    yield call(TodoApi.deleteTodo, action.payload);

    yield put({
      type: ITodoActionTypes.DELETE_TODO_SUCCESS,
      payload: action.payload,
    });
  } catch (err) {
    console.log("Error", err);
  }
}

export function* sagaWatcher(): Generator<Effect, void> {
  yield takeEvery(ITodoActionTypes.GET_TODOS, sagaGetTodos);
  yield takeEvery(ITodoActionTypes.CREATE_TODO, sagaCreateTodo);
  yield takeEvery(ITodoActionTypes.DELETE_TODO, sagaDeleteTodo);
}
