import React, { useState } from 'react';
import { TodoFormProps } from 'types/types';
import './TodoForm.styles.css';

export const TodoForm = ({ dispatch }: TodoFormProps) => {
    const [text, setText] = useState<string>("");
    const handlerText = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)

    const handlerAddItem = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const randomId = Math.floor(Math.random() * 1000);
        const payload = { id: randomId, isDone: false, text };
        dispatch({ type: "add", payload })
        setText("")
    }
    return (
        <form className="todolist__form" onSubmit={handlerAddItem}>
            <label htmlFor="text">Description:</label>
            <input type="text"
                className="todolist__input"
                placeholder="Enter the task's description"
                id="text"
                name="text"
                required={true}
                value={text}
                onChange={handlerText}
            />
            <button type="submit" className="todolist__button">
                <i className="fas fa-plus todolist__icon--plus"></i>
                <span className="todolist__btntext">ADD NEW</span>
            </button>
        </form>
    )
}