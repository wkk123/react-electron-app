import { TodoActionTypes } from './types'
import { todoItem } from './types';
// import { postTodo } from '../../axios/index'

export type MiddlewareFunction = (store: any) => (next: any) => (action: TodoActionTypes) => any;

const setLocal = (todos: todoItem[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// const post = async (todos: []) => {
//   const res = await postTodo(todos);
//   console.log(res)
// }

export const localSet: MiddlewareFunction = store => next => action => {
  let result = next(action)
  setLocal(store.getState().TodoReducer)
  return result
}

export const postTodos: MiddlewareFunction = store => next => action => {
  console.log(store.getState().TodoReducer)
  let result = next(action);
  post(store.getState().TodoReducer)
  return result
}
