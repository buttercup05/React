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

    let deleteToDo = (id) => {
        setTodos((prevVal) => todos.filter((prevVal, index)=> index != id) );
    }

    return(
        <div className="ToDo">
            <h1>ToDo App for Students</h1>
            <div className="addTask">
                <input type="text" placeholder="Task for Today..." value={newTodo} onChange={updateTodoValue} onKeyDown={handleKeyDown}/>
                <button onClick={addNewTask}>Add Task</button>
            </div>
            <ul className="list">
                <h3>ToDo List</h3>
                {
                    todos.map((task, index) => (
                        <li key={index}>
                            {task}
                            &nbsp;&nbsp;
                            <button className="counter" onClick={() => deleteToDo(index)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}