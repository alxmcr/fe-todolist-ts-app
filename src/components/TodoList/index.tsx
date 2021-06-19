import { Todo } from "components/Todo";
import { ITodoType, TodoListProps } from "types/types";
import './TodoList.styles.css';

export const TodoList = (
    { todos, dispatch }: TodoListProps,
) => {
    if (todos?.length === 0) return <p>Todo list is empty</p>

    return (
        <>
            {
                todos.map((todo: ITodoType) => (
                    <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                ))
            }
        </>
    )
}