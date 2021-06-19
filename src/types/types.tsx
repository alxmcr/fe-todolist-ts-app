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
    todo: ITodoType
}
