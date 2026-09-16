import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    addTodo,
    removeTodo,
    toggleTodo,
} from "./reducers/todoSlice";

import "./App.css";

function App() {
    const [todoText, setTodoText] = useState("");

    const dispatch = useDispatch();

    const todos = useSelector((state) => state.todos.todos);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todoText.trim() === "") {
            return;
        }

        dispatch(addTodo(todoText));

        setTodoText("");
    };

    return (
        <div className="app">
            <div className="todo-container">

                <div className="header">
                    <h1>My Todo List</h1>
                    <p>Manage your daily tasks with Redux Toolkit</p>
                </div>

                <form onSubmit={handleSubmit} className="todo-form">
                    <input
                        type="text"
                        placeholder="Enter your task..."
                        value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                    />

                    <button type="submit">
                        Add Todo
                    </button>
                </form>

                <div className="todo-list">

                    {todos.length === 0 ? (
                        <div className="empty">
                            <h3>No tasks yet</h3>
                            <p>Add a task to get started.</p>
                        </div>
                    ) : (
                        todos.map((todo) => (
                            <div
                                className={`todo-item ${
                                    todo.completed ? "completed" : ""
                                }`}
                                key={todo.id}
                            >
                                <div className="todo-content">

                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() =>
                                            dispatch(toggleTodo(todo.id))
                                        }
                                    />

                                    <span>
                                        {todo.text}
                                    </span>

                                </div>

                                <button
                                    className="delete-btn"
                                    onClick={() =>
                                        dispatch(removeTodo(todo.id))
                                    }
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    )}

                </div>

                <div className="footer">
                    <span>
                        Total Tasks: <strong>{todos.length}</strong>
                    </span>

                    <span>
                        Completed:{" "}
                        <strong>
                            {todos.filter((todo) => todo.completed).length}
                        </strong>
                    </span>
                </div>

            </div>
        </div>
    );
}

export default App;