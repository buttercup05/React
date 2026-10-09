import "./ToDo.css";
import { useState } from "react";

export default function ToDo () {
    let [todos, setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = (event) => {
        if(newTodo.trim() === "") return;

        setTodos([...todos, newTodo]);
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let handleKeyDown = (event) => {
        if(event.key === "Enter") {
            addNewTask();
        }
    }
    return(
        <div className="ToDo">
            <h1>ToDo App for Students</h1>
            <div className="addTask">
                <input type="text" placeholder="Task for Today..." value={newTodo} onChange={updateTodoValue} onKeyDown={handleKeyDown}/>
                <button onClick={addNewTask}>Add Task</button>
            </div>
            <ul className="list">
                {
                    todos.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))
                }
            </ul>
        </div>
    )
}