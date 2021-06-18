export type TodoType = {
    id: number,
    text: string,
    isDone: boolean
}

type TodoProps = {
    todo: TodoType
}

export const Todo = ({ todo }: TodoProps) => {
    return (
        <div>
            <p>{todo.id}. {todo.text}</p>
        </div>
    )
}