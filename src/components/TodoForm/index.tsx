import './TodoForm.styles.css'

export const TodoForm = () => {
    return (
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
    )
}