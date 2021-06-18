export interface ICustomTodoProps {
    todos: TodoType[],
    isLoading: boolean,
    error: Error | null
}

export type TodoType = {
    id: number,
    text: string,
    isDone: boolean
}

export type TodoProps = {
    todo: TodoType
}