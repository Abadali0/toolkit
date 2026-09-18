import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addTodo,removeTodo} from "./reducers/todoSlice";

import "./App.css";

function App() {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();

        dispatch(addTodo(todo));

        setTodoText("");
    };
    const handleDeleteTodo=(id)=>{
        dispatch(removeTodo(id));
    };

    return (
        <div >
            
            <form onSubmit={handleAddTodo}>
             <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Enter new todo"
             />

          <button type="submit">
           Add Todo
          </button>
          </form>
            { todos.map((todoItem)=>(
            <div>
                
               <div>
                    {todoItem.text}
                </div>

                <button onClick={()=>handleDeleteTodo(todoItem.id)}>
                    Delete
                    </button>
            </div>
            ))}
        </div>
    );
}

export default App;