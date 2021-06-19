import React, { useState } from 'react';
import { TodoFormProps } from 'types/types';
import './TodoForm.styles.css';

export const TodoForm = ({ dispatch }: TodoFormProps) => {
    const [text, setText] = useState<string>("");
    const handlerText = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)

    const handlerAddItem = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const randomId = Math.floor(Math.random() * 1000);
        const payload = { id: randomId, isDone: false, text };
        dispatch({ type: "add", payload })
    }
    return (
        <form className="todolist__form">
            <label htmlFor="text">Description:</label>
            <input type="text"
                className="todolist__input"
                placeholder="Enter the task's description"
                id="text"
                name="text"
                value={text}
                onChange={handlerText}
            />
            <button type="submit" className="todolist__button" onClick={handlerAddItem}>
                <i className="fas fa-plus todolist__icon--plus"></i>
                <span className="todolist__btntext">ADD NEW</span>
            </button>
        </form>
    )
}