import { ACTION_TYPES } from "reducers";

export type ITodoType = {
    id: number,
    text: string,
    isDone: boolean
}

export type ICustomTodoProps = {
    todos: ITodoType[],
    isLoading: boolean,
    error: Error | null
}

export type ITodosState = {
    todos: ITodoType[],
}

export type TodoProps = {
    todo: ITodoType,
    dispatch: React.Dispatch<ACTION_TYPES>
}

export type TodoListProps = {
    todos: ITodoType[],
    dispatch: React.Dispatch<ACTION_TYPES>
}

export type TodoFormProps = {
    dispatch: React.Dispatch<ACTION_TYPES>
}
