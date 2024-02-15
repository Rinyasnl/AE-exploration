// TodoList.js
import React, { useState, useEffect } from 'react';
import { addTodo, removeTodo } from './actions';
import todoStore from './store';

const TodoList = () => {
    const [todos, setTodos] = useState(todoStore.getAll());

    useEffect(() => {
        todoStore.on('change', () => {
            setTodos(todoStore.getAll());
        });
        return () => {
            todoStore.removeListener('change', () => {
                setTodos(todoStore.getAll());
            });
        };
    }, []);

    const handleAddTodo = () => {
        const text = prompt('Enter todo:');
        if (text) {
            addTodo(text);
        }
    };

    const handleRemoveTodo = (id) => {
        removeTodo(id);
    };

    return (
        <div>
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
