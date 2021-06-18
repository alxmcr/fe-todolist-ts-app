import './Todo.styles.css'
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
        <div className="todolist__todo" id={todo.id?.toString()}>
            <div className="todolist__icons">
                {todo.isDone
                    ? <i className="fas fa-check-circle todolist__icon todolist__icon--done"></i>
                    : <i className="far fa-check-circle todolist__icon"></i>
                }
            </div>
            <p className="todolist__text">{todo.text}</p>
        </div>
    )
}