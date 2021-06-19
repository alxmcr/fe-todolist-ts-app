import { useEffect, useState } from "react";
import { ICustomTodoProps, ITodoType } from "types/types";

export function useTodos(): ICustomTodoProps {
    const [todos, setTodos] = useState<ITodoType[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        setIsLoading(true);
        const todosList: ITodoType[] = [
            {
                id: 1,
                text: "Go to dentist",
                isDone: false,
            },
            {
                id: 2,
                text: "Buy a notebook",
                isDone: true,
            },
            {
                id: 3,
                text: "Read a book",
                isDone: false,
            },
            {
                id: 4,
                text: "Visit to my mom",
                isDone: false,
            },
            {
                id: 5,
                text: "Go to stadium",
                isDone: false,
            }
        ]
        setTodos(todosList)
        setIsLoading(false);
        setError(null)
    }, [])

    return { todos, isLoading, error };
}