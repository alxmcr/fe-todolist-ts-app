import { ITodosState, ITodoType } from "types/types";

// Initial state
export const initialTodoListState: ITodosState = {
    todos: []
}

// actions types
export type ACTION_TYPES =
    | { type: "add", payload: ITodoType }
    | { type: "remove", payload: ITodoType }
    | { type: "toggle", payload: ITodoType }

// todo reducer
export const todoReducer = (state: ITodosState, action: ACTION_TYPES) => {
    switch (action.type) {
        case "add":
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case "remove":
            const todosFiltered = state.todos.filter(item => {
                return item.id !== action.payload.id
            })
            return {
                ...state,
                todos: todosFiltered
            }
        case "toggle":
            const todosUpdated = state.todos.map(item => {
                const copyItem = { ...item }
                if (copyItem.id === action.payload.id) {
                    copyItem.isDone = !item.isDone;
                }
                return copyItem;
            })
            return {
                ...state,
                todos: todosUpdated
            }
        default:
            throw new Error("Bad action");
    }
}