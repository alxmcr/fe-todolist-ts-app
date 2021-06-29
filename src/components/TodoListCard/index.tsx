import { TodoForm } from "components/TodoForm";
import { TodoList } from "components/TodoList";
import { getNameDay, internationalizationDate } from "helpers/dateHelpers";
import { useReducer } from "react";
import { initialTodoListState, todoReducer } from "reducers";
import './TodoListCard.styles.css';

export const TodoListCard = () => {
    const [state, dispatch] = useReducer(todoReducer, initialTodoListState);
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
        dateStyle: 'medium'
    };
    const dateFormatted = internationalizationDate(today, options);
    const nameDay = getNameDay(today);
    return (
        <div className="todolist">
            <div className="todolist__header">
                <p className="todolist__day">{dateFormatted}</p>
                <p className="todolist__nameday">{nameDay}</p>
            </div>
            <div className="todolist__body">
                <TodoList todos={state.todos} dispatch={dispatch} />
            </div>
            <div className="todolist__footer">
                <TodoForm dispatch={dispatch} />
            </div>
        </div>
    )
}