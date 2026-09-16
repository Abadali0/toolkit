import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "Learn Redux Toolkit",
            completed: false,
        },
        {
            id: 2,
            text: "Buy Milk",
            completed: false,
        },
    ],
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,

    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
            };

            state.todos.push(todo);
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },

        toggleTodo: (state, action) => {
            const todo = state.todos.find(
                (todo) => todo.id === action.payload
            );

            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;