import { ACTION_TYPES } from "reducers";

export interface ITodoType {
    id: number,
    text: string,
    isDone: boolean
}

export interface ICustomTodoProps {
    todos: ITodoType[],
    isLoading: boolean,
    error: Error | null
}

export interface ITodosState {
    todos: ITodoType[],
}

export interface TodoProps {
    todo: ITodoType,
    dispatch: React.Dispatch<ACTION_TYPES>
}

export interface TodoListProps {
    todos: ITodoType[],
    dispatch: React.Dispatch<ACTION_TYPES>
}

export interface TodoFormProps {
    dispatch: React.Dispatch<ACTION_TYPES>
}
