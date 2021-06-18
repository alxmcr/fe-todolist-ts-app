import { Todo } from "components/Todo";
import { useTodos } from "hooks/useTodos";
import { TodoType } from "types/types";
import './TodoList.styles.css';

export const TodoList = () => {
    const { todos, isLoading, error } = useTodos();

    if (isLoading) return <p>Loading...</p>
    if (error !== null) return <p>There was an error...</p>
    if (todos?.length === 0) return <p>Todo list is empty</p>

    return (
        <>
            {
                todos.map((todo: TodoType) => (
                    <Todo todo={todo} key={todo.id} />
                ))
            }
        </>
    )
}