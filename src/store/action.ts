import { add_Todo, set_Done, TodoActionTypes } from './types'

// action 定义
export function addTodo(content: string): TodoActionTypes {
  return {
    type: add_Todo,
    content
  }
}

export function setDone(id: string, done: boolean): TodoActionTypes {
  return {
    type: set_Done,
    id,
    done
  }
}
