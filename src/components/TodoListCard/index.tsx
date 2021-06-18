import { TodoList } from "components/TodoList"
import './TodoListCard.styles.css'

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
                <form className="todolist__form">
                    <label htmlFor="text">Description:</label>
                    <input type="text"
                        className="todolist__input"
                        placeholder="Enter the task's description"
                        id="text"
                        name="text"
                    />
                    <button type="submit" className="todolist__button">
                        <i className="fas fa-plus todolist__icon--plus"></i>
                        <span className="todolist__btntext">ADD NEW</span>
                    </button>
                </form>
            </div>
        </div>
    )
}