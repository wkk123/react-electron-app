// 数据类型
export interface todoItem {
  id: string,
  content: string,
  done: boolean
}
export interface todos {
  [index: number]: todoItem
}

// action.type
export const add_Todo = "addTodo";
export const set_Done = "setDone";

// action 接口类型
interface addTodoAction {
  type: typeof add_Todo
  content: string
}
interface setDoneAction {
  type: typeof set_Done
  id: string
  done: boolean
}

// 联合类型表明可能的action
export type TodoActionTypes = addTodoAction | setDoneAction
