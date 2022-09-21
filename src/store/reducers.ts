import { todoItem, TodoActionTypes, add_Todo, set_Done } from './types'

function guid() {
  var s4 = () => {
    return (((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1))
  };

  //return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
  return s4()
}

const newTodo = (content: string) => ({
  done: false,
  id: guid(),
  content: (content || "").trim()
})

const initialState: todoItem[] = JSON.parse(localStorage.getItem("todos") || "[]");

export function TodoReducer(
  state = initialState,
  action: TodoActionTypes
): todoItem[] {
  switch (action.type) {
    case add_Todo:
      return [...state, newTodo(action.content)];
    case set_Done:
      return state.map(todo => todo.id === action.id ? { ...todo, done: action.done } : todo);
    default:
      return state
  }
}
