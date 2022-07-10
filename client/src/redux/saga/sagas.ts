import { call, Effect, put, takeEvery } from "redux-saga/effects";
import { TodoApi } from "../../api";
import {
  ICompleteAction,
  ICreateAction,
  IDeleteAction,
  ITodo,
  ITodoActionTypes,
  IUpdateAction,
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

function* sagaCompleteTodo(
  action: ICompleteAction<ITodo>
): Generator<Effect, void> {
  try {
    const todoObject: Partial<ITodo> = {
      done: action.payload.done,
      id: action.payload.id,
    };

    yield call(TodoApi.completeTodo, todoObject);

    yield put({
      type: ITodoActionTypes.COMPLETE_TODO_SUCCESS,
      payload: action.payload.id,
    });
  } catch (err) {
    console.log("Error", err);
  }
}
function* sagaUpdateTodo(
  action: IUpdateAction
): Generator<Effect, void, ITodo> {
  try {
    const todoObject: Partial<ITodo> = {
      id: action.payload.id,
      title: action.payload.title,
      done: action.payload.done,
    };

    const todo = yield call(TodoApi.updateTodo, todoObject);

    yield put({
      type: ITodoActionTypes.COMPLETE_TODO_SUCCESS,
      payload: todo,
      id: action.payload.id,
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
  yield takeEvery(ITodoActionTypes.COMPLETE_TODO, sagaCompleteTodo);
  yield takeEvery(ITodoActionTypes.UPDATE_TODO, sagaUpdateTodo);
  yield takeEvery(ITodoActionTypes.DELETE_TODO, sagaDeleteTodo);
}
