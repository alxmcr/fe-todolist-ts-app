import { TodoForm } from "components/TodoForm";
import { TodoList } from "components/TodoList";
import './TodoListCard.styles.css';

export const TodoListCard = () => {
    return (
        <div className="todolist">
            <div className="todolist__header">
                <p className="todolist__day">JUN 18, 2021</p>
                <p className="todolist__nameday">Friday</p>
            </div>
            <div className="todolist__body">
                <TodoList />
            </div>
            <div className="todolist__footer">
                <TodoForm />
            </div>
        </div>
    )
}