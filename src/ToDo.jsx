import "./ToDo.css";
import { useState } from "react";

export default function ToDo () {
    let [todos, setTodos] = useState([{ task: "sample-task", isDone : false }]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = (event) => {
        if(newTodo.trim() === "") return;

        setTodos((prev) => [...prev, {task: newTodo, isDone : false}]);
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

    let upperCaseAll = () => {
        setTodos((prevTask) => (
            prevTask.map((todo) => {
                return {...todo, task: todo.task.toUpperCase()};
            }))
        )
    };

    let upperCaseOne = (id) => {
        setTodos((prevTask) => (
            prevTask.map((todo, index) => {
                if(index === id) {
                    return {...todo, task:todo.task.toUpperCase()}
                } else {
                    return todo;
                }
            }))
        )
    }

    let markAllDone = () => {
        setTodos((prevTask) => (
            prevTask.map((todo) => {
                return {...todo, isDone: true};
            }))
        )
    };

    let markAsDone = (id) => {
        setTodos((prevTask) => (
            prevTask.map((todo, index) => {
                if(index === id) {
                    return { ...todo, isDone: true};
                } else {
                    return todo;
                }
            })
        ))
    }

    return(
        <div className="ToDo">
            <h1>ToDo App for Students</h1>
            <div className="addTask">
                <input type="text" placeholder="Task for Today..." value={newTodo} onChange={updateTodoValue} onKeyDown={handleKeyDown}/>
                <button onClick={addNewTask}>Add Task</button>
            </div>
            <h3>ToDo List</h3>
            <ul className="list">
                {
                    todos.map((todo, index) => (
                        <li key={index} style={todo.isDone ? {textDecorationLine : "line-through"} : { } }>
                            {todo.task}
                            &nbsp;&nbsp;
                            <button className="counter" onClick={() => deleteToDo(index)}>Delete</button>
                            &nbsp;&nbsp;
                            {/* <button className="counter" onClick={() => upperCaseOne(index)}>Uppercase One</button> */}
                            <button className="counter" onClick={() => markAsDone(index)}>Mark as done</button>
                        </li>
                    ))
                }
            </ul>
            <div>
                {/* <button onClick={upperCaseAll} className="counter">UpperCase All</button> */}
                <button onClick={markAllDone} className="counter">Mark All as Done</button>
            </div>
        </div>
    )
}